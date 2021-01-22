import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getMiniGamesMemories, deleteMiniGamesMemories } from './MiniGames.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/MiniGamesPagination';
import MiniGames from './interface/MiniGames';

export default function MiniGamesComponent() {

    let history = useHistory();
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
        const isAsc = pagination.sort === property && pagination.asc === 1;
        setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
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
            return history.push(`/minigames/visualizar-minigames/${miniGames._id}`);
        }
    };

    const handleClickDelete = async () => {
        setRequest(true)
        await deleteMiniGamesMemories(openModalDelete).then(res => {
            toast.success("Registro excluído com sucesso!", { toastId: 'sucessDeleteMiniGamesMemories' });
        }).catch(error => {
            toast.error("O registro não pode ser removido enquanto estiver em uso.", { toastId: error.message });
        }).finally(function () {
            handleClickModalDelete('');
            setRequest(false)
        });
    };

    return (
        <Header namePage={`MiniGames Memória `} link="/minigames/novo-minigame-memoria" title={'Adiconar Jogo'} >

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão do Registro?" />
            <Table
                request={request}
                data={miniGames}
                headCells={HEAD_CELL}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.asc === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                noActionEdit
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
