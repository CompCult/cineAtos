import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import User from '../interface/User';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { putUser, getByUser, postUser } from '../User.service';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";

export default function RegisterUser() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const [person, setPerson] = useState<User>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByUser(id).then(res => {
                setPerson(res.data)
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = (data: User) => {
        id ? Edit(data) : Register(data);
    };

    const Register = async (data: User) => {
        await postUser(data).then(res => {
            toast.success("Usuário foi cadastrado!", { toastId: 'sucessUser' });
            history.push('/usuarios');
        }).catch(error => {
            toast.error("Usuário não foi cadastrado!", { toastId: error.message });
        });
    };

    const Edit = async (data: User) => {
        await putUser(data).then(res => {
            toast.success("Usuário foi Atualizado!", { toastId: 'sucessUser' });
            history.push('/usuarios');
        }).catch(error => {
            toast.error("Usuário não foi Atualizado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Pessoas" subPage={`${id ? 'Editar' : 'Nova'} Pessoa`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
