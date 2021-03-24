import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Modal, Table } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { useHistory } from "react-router-dom";
import { deleteStore, getStore } from './Store.service';
import { InterfacePagination } from './interface/StorePagination';
import Item from './interface/Item';
import { StoreInterface } from './interface/StoreComponent';
import TableBody from './component/TableBody.component';
import { Action, ACTION_EDIT, ACTION_DELETE } from '../../component/table/interfaces/TableInterface';
import { useSnackbar } from '../../context/Snackbar';

export default function StoreComponent({ isPupils }: StoreInterface) {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
    const [store, setStore] = useState<Array<Item>>([]);
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');

    useEffect(() => {
        getStore(pagination).then(res => {
            if (res.data) {
                setStore(setData(res.data.docs, isPupils));
                console.log(res.data.docs)
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request, isPupils]);


    const setData = (data: Array<Item>, isPupils?: boolean) => {
        return data.filter((obj: Item) => obj.isCreatedByMission === !!isPupils);
    }

    const handleRequestSort = (_event: MouseEvent<unknown>, property: string) => {
        const isAsc = pagination.sort === property && pagination.order === 1;
        setPagination({ ...pagination, sort: property, order: isAsc ? -1 : 1 });
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPagination({ ...pagination, page: newPage + 1 });
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setPagination({ ...pagination, limit: +event.target.value, page: 1 });
    };

    const handleClickModalDelete = (value?: string) => {
        setOpenModalDelete(value || '');
    };

    const handleClick = (action: Action, id: string) => {
        if (action === ACTION_EDIT) {
            return history.push(`/loja-virtual/editar-item/${id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(id);
        }
        return history.push(`/loja-virtual/pedidos/${id}`);
    }

    const handleClickDelete = async () => {
        await deleteStore(openModalDelete).then(res => {
            setSnackbar({ ...snackbar, msg: "Usuário excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Erro ao excluir usuário!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };
    console.log(!!isPupils)
    return (
        <Header namePage="Loja Virtual" link="/loja-virtual/novo-item" title={`${!!isPupils ? '' : 'Adicionar Item'}`} can={!isPupils}>
            <Table
                request={request}
                data={store}
                noTable
                size={total}
                headCells={[]}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.order === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
            >
                <TableBody data={store} isPupils={!!isPupils} onClick={handleClick} />
                <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão desse Card ?" />
            </Table>
        </Header>
    );
}
