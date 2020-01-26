import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import MiniGamesApi from "../MiniGamesApi";
import { RenderTextField, RadioButtonType } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Title } from "../../../components/Title";
import { ButtomImport, ButtomSubmit } from "../../../components/buttom/Buttom";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

var buttonSubmitValidate = false

const useStyles = makeStyles(theme => ({
    selectedImage: {
        width: "30%",
        height: "30%",
        maxWidth: 100,
        maxHeight: 50,
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

function CreateMemories() {
    const classes = useStyles();
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        description: '',
        points: 0,
        is_public: true,
        images: []
    })
    const [request, setRequest] = useState(false);

    const handleChangeImages = name => event => {
        let file = event.target.files[0];
        if (file !== undefined) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                let images = values.images
                images.push(reader.result)
                if (values.images.length <= 8) {
                    setValues({ ...values, [name]: images })
                }
            };
        }
    }

    const handleChange = name => event => {
        if (name === 'is_public') {
            setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
        } else {
            setValues({ ...values, [name]: event.target.value })
        }
    }

    const postCreateMemories = async (event) => {
        event.preventDefault();
        setRequest(true)
        await MiniGamesApi.postMiniGamesMemoriesApi(values).then(res => {
            history.push("/miniGames/menoria")
            toast.success("Novo jogo cadastrado com sucesso!");
        }).catch(error => {
            toast.error("Erro ao cadastrar novo jogo");
            setRequest(false)
        })
    }

    return (
        <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
            <Title title="Adicionar Jogo da memória" />
            <form className="form" onSubmit={postCreateMemories}>
                <Field onChange={handleChange('title')} name="title" component={RenderTextField} type='text' label="Título do miniGame" />

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

                <ButtomImport onChange={handleChangeImages('images')} title="Escolher imagens para o jogo da memória" />

                <div>
                    {values.images.length !== 0 && values.images.map((obj, index) => {
                        return <img src={obj} className={classes.selectedImage} alt={'images'} key={index} />
                    })}
                </div>
                <ButtomSubmit title={!request ? "Cadastrar jogo da memória" : " Cadastrando..."} disabled={!(buttonSubmitValidate && values.images.length > 1 && !request)} />
            </form>

        </Card>
    )
}

export default reduxForm({
    form: 'MaterialUiFormMemories',  // a unique identifier for this form
    validate
})(CreateMemories)
