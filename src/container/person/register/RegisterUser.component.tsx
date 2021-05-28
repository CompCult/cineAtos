import React, { useState, useEffect } from 'react';
import { Header, Progress } from '../../../component/Component';
import Form from '../form/Form.component';
import User from '../interface/User';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { putUser, getByUser, postUser } from '../User.service';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../interfaces/ParamTypes';
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
                setRequest(false);
            });
        }
        setRequest(false);
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

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Header namePage="Pessoas" subPage={`${id ? 'Editar' : 'Nova'} Pessoa`}>
            <Form handleSubmitForm={onSubmit} initialValues={person} request={request} />
        </Header>
    );
}
