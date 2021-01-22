import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Item from '../interface/Item';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByStore, postStore, putStore } from '../Store.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegisterItem() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
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

    const onSubmit = (data: Item) => {
        id ? Edit(data) : Register(data);
    };

    const Register = async (data: Item) => {
        await postStore(data).then(res => {
            toast.success("Item foi cadastrado!", { toastId: 'sucessItem' });
            history.push('/Item/meus-Item');
        }).catch(error => {
            toast.error("Item não foi cadastrado!", { toastId: error.message });
        });
    };

    const Edit = async (data: Item) => {
        await putStore(data).then(res => {
            toast.success("Item foi Atualizado!", { toastId: 'sucessItem' });
            history.push('/Item/meus-Item');
        }).catch(error => {
            toast.error("Item não foi Atualizado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Meus Item" subPage={`${id ? 'Editar' : 'Novo'} Item`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
