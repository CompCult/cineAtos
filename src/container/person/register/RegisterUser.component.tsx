import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import User from '../interface/User';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { putUser, getByUser, postUser } from '../User.service';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterUser() {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();
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

    const onSubmit = async (data: User) => {
        try {
            await (id ? putUser(data) : postUser(data));
            setSnackbar({ ...snackbar, msg: `Usuário foi ${id ? 'atualizado' : 'cadastrado'} com sucesso!`, type: 'success' });
            history.push(`/usuarios${id ? '' : '/novo-usuario'}`);
        } catch (error) {
            setSnackbar({ ...snackbar, msg: `Erro ao ${id ? 'atualizar' : 'cadastrar'} usuário!`, type: 'error' });
        }
    };

    return (
        <Header namePage="Pessoas" subPage={`${id ? 'Editar' : 'Nova'} Pessoa`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} isRequired={!id} />
        </Header>
    );
}
