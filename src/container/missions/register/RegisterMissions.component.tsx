import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Missions from '../interface/Missions';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByMissions, postMissions, putMissions } from '../Missions.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegisterMissions() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const [person, setPerson] = useState<Missions>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByMissions(id).then(res => {
                setPerson(res.data)
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = (data: Missions) => {
        id ? Edit(data) : Register(data);
    };

    const Register = async (data: Missions) => {
        await postMissions(data).then(res => {
            toast.success("Missão foi cadastrado!", { toastId: 'sucessMissions' });
            history.push('/missoes/minhas-missoes');
        }).catch(error => {
            toast.error("Missão não foi cadastrado!", { toastId: error.message });
        });
    };

    const Edit = async (data: Missions) => {
        await putMissions(data).then(res => {
            toast.success("Missão foi Atualizado!", { toastId: 'sucessMissions' });
            history.push('/missoes/minhas-missoes');
        }).catch(error => {
            toast.error("Missão não foi Atualizado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Minhas Missões" subPage={`${id ? 'Editar' : 'Nova'} Missão`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
