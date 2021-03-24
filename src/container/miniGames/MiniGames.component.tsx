import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getMiniGamesMemories, deleteMiniGamesMemories } from './MiniGames.service';
import { useSnackbar } from '../../context/Snackbar';
import { InterfacePagination } from './interface/MiniGamesPagination';
import MiniGames from './interface/MiniGames';
import { authentication } from '../../core/auth/Authentication';

export default function MiniGamesComponent() {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
    const [miniGames, setMiniGames] = useState<Array<MiniGames>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        getMiniGamesMemories().then(res => {
            if (res.data) {
                setMiniGames(res.data);
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

    const onSubmit = (miniGames: InterfacePagination) => {
        //setPagination({ ...pagination, uf: MiniGames.uf, municipio: MiniGames.municipio, unidadeOperacao: MiniGames?.unidadeOperacao, dataValidacaoInicial: MiniGames.dataValidacaoInicial, meioValidacaoFinal: MiniGames.meioValidacaoFinal });
    };

    const handleClickAction = (action: Action, miniGames: InterfacePagination) => {
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(miniGames._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/minigames/meus-MiniGames/visualizar-minigames/${miniGames._id}`);
        }
    };

    const handleClickDelete = async () => {
        setRequest(true)
        await deleteMiniGamesMemories(openModalDelete).then(res => {
            setSnackbar({ ...snackbar, msg: "MiniGame excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Erro ao excluir MiniGame!", type: 'error' });
        }).finally(function () {
            handleClickModalDelete('');
            setRequest(false)
        });
    };

    return (
        <Header namePage={`MiniGames Memória `} link="/minigames/novo-minigame-memoria" title='Adicionar Jogo' can={authentication()}>

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão do Registro?" />
            <Table
                request={request}
                data={miniGames}
                headCells={HEAD_CELL}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.order === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                noActionEdit
                noActionDelete={!authentication()}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
