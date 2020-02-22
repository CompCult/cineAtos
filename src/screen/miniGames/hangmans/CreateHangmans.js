import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import MiniGamesApi from "../MiniGamesApi";
import { RenderTextField, RadioButtonType } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

var buttonSubmitValidate = false

const validate = values => {
    const errors = {}
    const requiredFields = ['title', 'description', 'points']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo não pode ser vazio'
        }

        let containsOnlySpaces = values[field] + ""
        if (containsOnlySpaces.trim() === "") {
            errors[field] = 'Campo não pode conter só espaços vazios'
        }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
    return errors
}

function CreateHangmans() {
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        description: '',
        points: 0,
        is_public: true,
    })
    const [request, setRequest] = useState(false);

    const handleChange = name => event => {
        if (name === 'is_public') {
            setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
        } else {
            setValues({ ...values, [name]: event.target.value })
        }
    }

    const postCreateHangmans = async (event) => {
        event.preventDefault();
        setRequest(true)
        await MiniGamesApi.postMiniGamesHangmansApi(values).then(res => {
            history.push("/miniGames/forca")
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
            setRequest(false)
        })
    }

    return (
        <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }}>
            <Title title="Adicionar Jogo da memória" />
            <form className="form" onSubmit={postCreateHangmans}>
                <Field onChange={handleChange('title')} name="title" component={RenderTextField} type='text' label="Título do miniGame" />

                <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição do miniGame" rows="5" />

                <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos do miniGame" />

                <Field
                    onChange={handleChange('is_public')}
                    name="is_public"
                    component={RadioButtonType}
                    checked={values.is_public}
                    label="Visibilidade do miniGame"
                    FormControlLabelOne="Público"
                    FormControlLabelTwo="Privado" />

                <ButtomSubmit title={!request ? "Cadastrar jogo da forca" : " Cadastrando..."} disabled={!(buttonSubmitValidate && !request)} />
            </form>

        </Card>
    )
}

export default reduxForm({
    form: 'MaterialUiFormHangmans',  // a unique identifier for this form
    validate
})(CreateHangmans)
