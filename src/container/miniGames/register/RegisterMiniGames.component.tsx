import React, { useState, ChangeEvent } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import MiniGames from '../interface/MiniGames';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { postMiniGamesMemories } from '../MiniGames.service';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegisterMiniGames() {

    let history = useHistory();
    const [values, setValues] = useState<Array<any>>([]);

    const addFile = (file: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (values.length <= 8) {
                let images = values
                images.push(reader.result)
                setValues(images);
            }
        };
    }

    const handleChangeImages = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            for (let index = 0; index < event.target.files?.length; index++) {
                let file = event.target.files[index];
                addFile(file);
            }
        }
    }

    /*
        const handleChangeImages = (event: ChangeEvent<HTMLInputElement>) => {
            let files = [];
            if (event.target.files?.length) {
                for (let index = 0; index < event.target.files?.length; index++) {
                    let file = event.target.files[index];
                    if (files.length < 8) {
                        files.push(URL.createObjectURL(file));
                    }
                }
            }
            setValues(files);
        }
    */
    const onSubmit = async (data: MiniGames) => {
        await postMiniGamesMemories(data).then(res => {
            toast.success("MiniGames foi cadastrado!", { toastId: 'sucessMiniGames' });
            history.push('/minigames/memoria');
        }).catch(error => {
            toast.error("MiniGames não foi cadastrado!", { toastId: error.message });
        });
    };

    console.log(values)

    return (
        <Header namePage="MiniGames" subPage='Novo jogo da memória'>
            <Form handleSubmit={onSubmit} initialValues={INITIAL_VALUES} handleChangeImages={handleChangeImages} images={values} />
        </Header>
    );
}
