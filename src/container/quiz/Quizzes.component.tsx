import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION, INITIAL_VALUES } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL, HEAD_CELL_NO_ACTION } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getQuizzes, deleteQuizzes } from './Quizzes.service';
import { useSnackbar } from '../../context/Snackbar';
import { InterfacePagination } from './interface/QuizzesPagination';
import Quizzes from './interface/Quizzes';
import { QuizzesInterface } from './interface/QuizzesComponent';
import { getToken } from '../../core/auth/auth';
import { authentication } from '../../core/auth/Authentication';
import FormFilter from './form/FormFilter.component';

export default function QuizzesComponent({ allQuizzes }: QuizzesInterface) {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
    const [quizzes, setQuizzes] = useState<Array<Quizzes>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

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

    const onSubmit = (quiz: Quizzes) => {
        setPagination({ ...pagination, title: quiz.title, description: quiz.description, secret_code: quiz.secret_code, lux: quiz.lux, resources: quiz.resources });
        handleClick();
    };

    const handleClickDelete = async () => {
        await deleteQuizzes(openModalDelete).then(res => {
            setSnackbar({ ...snackbar, msg: "Quiz excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Erro ao excluir quiz!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Header namePage={`${allQuizzes ? 'Todos os' : 'Meus'} Quizzes`} link="/quizzes/meus-quizzes/novo-quiz" title='Adicionar Quiz' can={(authentication() && !allQuizzes)}>
            <Modal.ModalC open={open} handleClick={handleClick} title='Pesquisar' >
                <FormFilter handleSubmit={onSubmit} initialValues={INITIAL_VALUES} onClick={handleClick} />
            </Modal.ModalC>

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão desse quiz?" />
            <Table
                request={request}
                data={quizzes}
                size={total}
                headCells={authentication() ? HEAD_CELL : HEAD_CELL_NO_ACTION}
                page={pagination.page}
                noActionEdit={(allQuizzes || !authentication())}
                noActionDelete={(allQuizzes || !authentication())}
                rowsPerPage={pagination.limit}
                order={pagination.order === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
