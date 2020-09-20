import React, { useState } from 'react';
import MiniGamesApi from "../MiniGamesApi";
import { TitlePage } from "../../../components/Title";
import Card from '../../../components/Card';
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
            setValues(INITIAL_VALUES);
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
        })
    }

    return (
        <div className='App'>
            <TitlePage title='Jogo' subTitle='Adicionar Jogo da memória' />
            <Card className='form-register'>
                <Form handleChangeImages={handleChangeImages} images={values.images} handleSubmit={handleSubmit} initialValues={values} />
            </Card>
        </div>
    )
}

export default CreateMemories;