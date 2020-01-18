import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import MiniGamesApi from "../MiniGamesApi";
import Button from '@material-ui/core/Button'
import { RenderTextField, RadioButtonType } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { TitleEdit } from "../../../components/Title";
import { ButtomImport } from "../../../components/buttom/Buttom";

var buttonSubmitValidate = false

const useStyles = makeStyles(theme => ({
    selectedImage: {
        width: "30%",
        height: "30%",
        maxWidth: 200,
        maxHeight: 200,
        marginBottom: 20
    }
}));

const validate = values => {
    const errors = {}
    const requiredFields = ['title', 'description', 'points']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo não pode ser vazio'
        }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
    return errors
}

function CreateMiniGamesForm() {
    const classes = useStyles();
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        description: '',
        points: 0,
        is_public: true,
        image: ''
    })

    const handleChange = name => event => {
        if (name === 'image') {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setValues({ ...values, [name]: reader.result })
            };
        }
        else if (name === 'is_public') {
            setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
        } else {
            setValues({ ...values, [name]: event.target.value })
        }
    }

    const postCreateMiniGames = async (event) => {
        event.preventDefault();
        await MiniGamesApi.postMiniGamesApi(values).then(res => {
        }).catch(error => {
            console.log(error.response)
        })
        setTimeout(() => history.replace("/miniGames"), 10)
    }

    return (
        <form className="form" onSubmit={postCreateMiniGames}>
            <TitleEdit title="Adicionar Jogo da memória" />
            <Field onChange={handleChange('title')} name="title" component={RenderTextField} type='text' label="Título miniGame" />

            <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição do miniGame" />

            <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos do miniGame" />

            <Field
                onChange={handleChange('is_public')}
                name="is_public"
                component={RadioButtonType}
                checked={values.is_public}
                label="Visibilidade do miniGame"
                FormControlLabelOne="Público"
                FormControlLabelTwo="Privado" />

            <ButtomImport onChange={handleChange('image')} title="Escolher imagem para o jogo da memória" />

            <div>
                {values.image !== '' &&
                    <img src={values.image} className={classes.selectedImage} alt='selectedImage' />
                }
            </div>

            <Button type="submit" variant="contained" color="primary" disabled={!(buttonSubmitValidate)}>
                Cadastrar jogo da memória
            </Button>
        </form>
    )
}

export default reduxForm({
    form: 'MaterialUiFormMiniGames',  // a unique identifier for this form
    validate
})(CreateMiniGamesForm)