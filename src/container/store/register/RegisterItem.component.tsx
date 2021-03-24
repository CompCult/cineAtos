import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Item from '../interface/Item';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByStore, postStore, putStore } from '../Store.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterItem() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
    const [person, setPerson] = useState<Item>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByStore(id).then(res => {
                setPerson(res.data)
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: Item) => {
        try {
            await (id ? putStore(data) : postStore(data));
            setSnackbar({ ...snackbar, msg: `Item foi ${id ? 'atualizado' : 'cadastrado'} com sucesso!`, type: 'success' });
            history.push(`/Item/meus-Item`);
        } catch (error) {
            setSnackbar({ ...snackbar, msg: `Erro ao ${id ? 'atualizar' : 'cadastrar'} Item!`, type: 'error' });
        }
    };

    return (
        <Header namePage="Meus Item" subPage={`${id ? 'Editar' : 'Novo'} Item`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
