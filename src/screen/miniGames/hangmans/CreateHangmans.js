import React, { useState } from 'react'
import MiniGamesApi from "../MiniGamesApi";
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from '../Form';

const INITIAL_VALUES = {
    title: '',
    description: '',
    lux: '',
    resources: '',
    is_public: true,
}

function CreateHangmans() {
    let history = useHistory()
    const [values] = useState(INITIAL_VALUES)

    const handleSubmit = async (event) => {
        await MiniGamesApi.postMiniGamesHangmansApi(event).then(res => {
            history.push("/miniGames/forca")
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
        })
    }

    return (
        <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }}>
            <Title title="Adicionar Jogo da memória" />
            <Form handleSubmit={handleSubmit} initialValues={values} />
        </Card>
    )
}

export default CreateHangmans;
