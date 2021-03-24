import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION, INITIAL_VALUES } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL, HEAD_CELL_NO_ACTION } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getUser, deleteUser } from './User.service';
import { useSnackbar } from '../../context/Snackbar';
import { InterfacePagination } from './interface/UserPagination';
import User from './interface/User';
import { authentication } from '../../core/auth/Authentication';
import FormFilter from './form/FormFilter.component';

export default function UserComponent() {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
    const [user, setUser] = useState<Array<User>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        getUser(pagination).then(res => {
            if (res.data) {
                setUser(res.data.docs);
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request]);

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

    const onSubmit = (user: User) => {
        setPagination({ ...pagination, name: user.name, email: user.email, type: user.type, sec_points: user.sec_points });
        handleClick();
    };

    const handleClickAction = (action: Action, user: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/usuarios/editar-usuario/${user._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(user._id);
        }
    };

    const handleClickDelete = async () => {
        await deleteUser(openModalDelete).then(res => {
            setSnackbar({ ...snackbar, msg: "Usuário excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Erro ao excluir usuário!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Header namePage="Pessoas" link="/usuarios/novo-usuario" title="Adicionar Usuário" can={authentication()}>
            <Modal.ModalC open={open} handleClick={handleClick} title='Pesquisar' >
                <FormFilter handleSubmit={onSubmit} initialValues={INITIAL_VALUES} onClick={handleClick} isRequired={false} />
            </Modal.ModalC>

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão desse usuário?" />
            <Table
                request={request}
                data={user}
                size={total}
                headCells={authentication() ? HEAD_CELL : HEAD_CELL_NO_ACTION}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.order === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                noActionView
                noActionEdit={!authentication()}
                noActionDelete={!authentication()}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />

        </Header>
    );
}
