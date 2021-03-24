import React, { useState, useEffect } from 'react';
import { Header, Progress } from '../../../component/Component';
import Form from '../form/Form.component';
import MiniGames from '../interface/MiniGames';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { postMiniGamesMemories, getByMiniGamesMemories } from '../MiniGames.service';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';

export default function RegisterMiniGames() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
    const [miniGames, setMiniGames] = useState<MiniGames>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByMiniGamesMemories(id).then(res => {
                setMiniGames(res.data);
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: MiniGames) => {
        try {
            await postMiniGamesMemories(data);
            setSnackbar({ ...snackbar, msg: 'MiniGame foi cadastrado com sucesso', type: 'success' });
            history.push('/minigames/memoria');
        } catch (error) {
            setSnackbar({ ...snackbar, msg: "Erro ao cadastrar MiniGame!", type: 'error' });
        }
    };

    if (id ? request : false) {
        return <Progress open={request} />
    }

    return (
        <Header namePage="MiniGames" subPage='Novo jogo da memória'>
            <Form handleSubmit={onSubmit} initialValues={miniGames} isImages={true} />
        </Header>
    );
}
