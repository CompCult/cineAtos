import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION, INITIAL_VALUES } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL, HEAD_CELL_NO_ACTION } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getMissions, deleteMissions } from './Missions.service';
import { useSnackbar } from '../../context/Snackbar';
import { InterfacePagination } from './interface/MissionsPagination';
import Missions from './interface/Missions';
import { getToken } from "../../core/auth/auth";
import { authentication } from '../../core/auth/Authentication';
import FormFilter from './form/FormFilter.component';
import { AllInformation } from '../../interfaces/myInfo/MyInfo';

export default function MissionsComponent({ allInformation }: AllInformation) {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
    const [missions, setMissions] = useState<Array<Missions>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        let paginationAux: InterfacePagination = pagination;

        if (!allInformation) {
            paginationAux._user = getToken()._id;
        }

        getMissions(paginationAux).then(res => {
            if (res.data) {
                setMissions(res.data.docs);
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [allInformation, pagination, request]);

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

    const onSubmit = (missions: InterfacePagination) => {
        setPagination({ ...pagination, name: missions.name, description: missions.description, lux: missions.lux, resources: missions.resources, end_message: missions.end_message });
        handleClick();
    };

    const handleClickAction = (action: Action, Missions: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/missoes/minhas-missoes/editar-missao/${Missions._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(Missions._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/missoes/${allInformation ? 'todas-missoes' : 'minhas-missoes'}/visualizar-missao/${Missions._id}`);
        }
    };

    const handleClickDelete = async () => {
        await deleteMissions(openModalDelete).then(res => {
            setSnackbar({ ...snackbar, msg: "Missão excluída com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Erro ao excluir missão!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Header namePage={`${allInformation ? 'Todas as' : 'Minhas'} Missões`} link="/missoes/minhas-missoes/nova-missao" title='Adicionar Missão' can={(authentication() && !allInformation)} >

            <Modal.ModalC open={open} handleClick={handleClick} title='Pesquisar' >
                <FormFilter handleSubmitForm={onSubmit} initialValues={INITIAL_VALUES_PAGINATION} onClick={handleClick} />
            </Modal.ModalC>

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão dessa missão?" />
            <Table
                request={request}
                data={missions}
                size={total}
                headCells={authentication() ? HEAD_CELL : HEAD_CELL_NO_ACTION}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.order === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                noActionDelete={(allInformation || !authentication())}
                noActionEdit={(allInformation || !authentication())}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
