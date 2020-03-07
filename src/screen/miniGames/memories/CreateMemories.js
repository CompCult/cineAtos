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
    images: []
}

function CreateMemories() {
    let history = useHistory()
    const [values, setValues] = useState(INITIAL_VALUES);

    const addFile = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            let images = values.images
            images.push(reader.result)
            if (values.images.length <= 8) {
                setValues({ ...values, images: images })
            }
        };
    }

    const handleChangeImages = event => {
        for (let index = 0; index < event.target.files.length; index++) {
            let file = event.target.files[index];
            if (file !== undefined) {
                addFile(file)
            }
        }
    }

    const handleSubmit = async (event) => {
        await MiniGamesApi.postMiniGamesMemoriesApi(event).then(res => {
            history.push("/miniGames/menoria")
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
        })
    }

    return (
        <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }}>
            <Title title="Adicionar Jogo da memória" />
            <Form handleChangeImages={handleChangeImages} images={values.images} handleSubmit={handleSubmit} initialValues={values} />
        </Card>
    )
}

export default CreateMemories;
