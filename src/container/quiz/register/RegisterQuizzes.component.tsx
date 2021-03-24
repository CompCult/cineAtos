import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Quizzes from '../interface/Quizzes';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByQuizzes, postQuizzes, putQuizzes } from '../Quizzes.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterQuizzes() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
    const [person, setPerson] = useState<Quizzes>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByQuizzes(id).then(res => {
                setPerson(res.data)
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: Quizzes) => {
        try {
            await (id ? putQuizzes(data) : postQuizzes(data));
            setSnackbar({ ...snackbar, msg: `Quiz foi ${id ? 'atualizado' : 'cadastrado'} com sucesso!`, type: 'success' });
            history.push(`/quizzes/meus-quizzes${id ? '' : '/novo-quiz'}`);
        } catch (error) {
            setSnackbar({ ...snackbar, msg: `Erro ao ${id ? 'atualizar' : 'cadastrar'} quiz!`, type: 'error' });
        }
    };

    return (
        <Header namePage="Meus Quizzes" subPage={`${id ? 'Editar' : 'Novo'} Quiz`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
