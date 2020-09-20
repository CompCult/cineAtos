import React, { useState } from 'react';
import MiniGamesApi from "../MiniGamesApi";
import { TitlePage } from "../../../components/Title";
import { toast } from "react-toastify";
import Form from '../Form';
import Card from '../../../components/Card';

const INITIAL_VALUES = {
    title: '',
    description: '',
    lux: '',
    resources: '',
    is_public: true,
}

function CreateHangmans() {
    const [values, setValues] = useState(INITIAL_VALUES)

    const handleSubmit = async (event) => {
        await MiniGamesApi.postMiniGamesHangmansApi(event).then(res => {
            setValues(INITIAL_VALUES);
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
        })
    }

    return (
        <div className='App'>
            <TitlePage title='Jogo' subTitle='Adicionar Jogo da memória' />
            <Card >
                <Form handleSubmit={handleSubmit} initialValues={values} />
            </Card>
        </div>
    )
}

export default CreateHangmans;
