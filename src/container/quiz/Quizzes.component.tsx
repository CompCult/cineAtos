import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getQuizzes, deleteQuizzes } from './Quizzes.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/QuizzesPagination';
import Quizzes from './interface/Quizzes';
import { QuizzesInterface } from './interface/QuizzesComponent';
import { getToken } from '../../core/auth/auth';

export default function QuizzesComponent({ allQuizzes }: QuizzesInterface) {

    let history = useHistory();
    const [quizzes, setQuizzes] = useState<Array<Quizzes>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        let paginationAux: InterfacePagination = pagination;

        if (!allQuizzes) {
            paginationAux._user = getToken()._id;
        }

        getQuizzes(paginationAux).then(res => {
            if (res.data) {
                setQuizzes(res.data.docs);
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request, allQuizzes]);

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

    const handleClickAction = (action: Action, quizzes: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/quizzes/meus-quizzes/editar-quiz/${quizzes._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(quizzes._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/quizzes/${!allQuizzes ? 'meus-quizzes' : 'todos-quizzes'}/visualizar-quiz/${quizzes._id}`);
        }
    };

    const handleClickDelete = async () => {
        await deleteQuizzes(openModalDelete).then(res => {
            toast.success("Registro excluído com sucesso!", { toastId: 'sucessDeleteQuizzes' });
        }).catch(error => {
            toast.error("O registro não pode ser removido enquanto estiver em uso.", { toastId: error.message });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    return (
        <Header namePage={`${allQuizzes ? 'Todos os' : 'Meus'} Quizzes`} link="/quizzes/meus-quizzes/novo-quiz" title={`${allQuizzes ? '' : 'Adiconar Quiz'}`} >

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão do Registro?" />
            <Table
                request={request}
                data={quizzes}
                size={total}
                headCells={HEAD_CELL}
                page={pagination.page}
                noActionEdit={allQuizzes}
                noActionDelete={allQuizzes}
                rowsPerPage={pagination.limit}
                order={pagination.asc === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
