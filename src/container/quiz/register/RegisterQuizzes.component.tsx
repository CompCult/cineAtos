import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Quizzes from '../interface/Quizzes';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByQuizzes, postQuizzes, putQuizzes } from '../Quizzes.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegisterQuizzes() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
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

    const onSubmit = (data: Quizzes) => {
        id ? Edit(data) : Register(data);
    };

    const Register = async (data: Quizzes) => {
        await postQuizzes(data).then(res => {
            toast.success("Quizzes foi cadastrado!", { toastId: 'sucessQuizzes' });
            history.push('/quizzes/meus-quizzes');
        }).catch(error => {
            toast.error("Quizzes não foi cadastrado!", { toastId: error.message });
        });
    };

    const Edit = async (data: Quizzes) => {
        await putQuizzes(data).then(res => {
            toast.success("Quizzes foi Atualizado!", { toastId: 'sucessQuizzes' });
            history.push('/quizzes/meus-quizzes');
        }).catch(error => {
            toast.error("Quizzes não foi Atualizado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Meus Quizzes" subPage={`${id ? 'Editar' : 'Novo'} Quiz`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
