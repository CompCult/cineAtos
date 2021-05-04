import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Missions from '../interface/Missions';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByMissions, postMissions, putMissions } from '../Missions.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterMissions() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
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

    const onSubmit = async (data: Missions) => {
        try {
            await (id ? putMissions(data) : postMissions(data));
            setSnackbar({ ...snackbar, msg: `Missão foi ${id ? 'atualizada' : 'cadastrada'} com sucesso!`, type: 'success' });
            history.push(`/missoes/minhas-missoes${id ? '' : '/nova-missao'}`);
        } catch (error) {
            setSnackbar({ ...snackbar, msg: `Erro ao ${id ? 'atualizar' : 'cadastrar'} missão!`, type: 'error' });
        }
    };

    return (
        <Header namePage="Minhas Missões" subPage={`${id ? 'Editar' : 'Nova'} Missão`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
