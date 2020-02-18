import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import MissionsApi from '../MissionsApi.js'
import { ButtomAdvancedOptions, ButtomSubmit } from "../../../components/buttom/Buttom";
import { DataPicker, RenderTextField, RadioButtonTypeSent, RadioButtonType } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'description', 'end_message', 'points']
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

function CreateMissionForm() {
  let history = useHistory()
  const [values, setValues] = useState({
    start_time: new Date(),
    end_time: new Date(),
    name: '',
    description: '',
    end_message: '',
    points: 0,
    is_public: true,
    is_grupal: false,
    single_answer: true,
    has_image: false,
    has_video: false,
    has_text: false,
    has_audio: false,
    has_geolocation: false,
  })

  const [openAdvancedOptions, setAdvancedOptions] = useState(false)

  const [request, setRequest] = useState(false);

  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions)
  }

  const handleChange = name => event => {
    if (name === 'start_time' || name === 'end_time') {
      setValues({ ...values, [name]: event })
    }
    else if (name === 'is_public' || name === 'single_answer' || name === 'is_grupal' || name === 'has_image' || name === 'has_video' || name === 'has_text' || name === 'has_audio' || name === 'has_geolocation') {
      setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
    } else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateMission = async (event) => {
    event.preventDefault();
    setRequest(true)
    await MissionsApi.postMissionsApi(values).then(res => {
      history.push("/missoes/minhas-missoes")
      toast.success("Nova missão cadastrada com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar nova Missão");
      setRequest(false)
    })
  }

  const advancedOptions = (
    <Fragment>
      <Field
        onChange={handleChange('is_public')}
        name="is_public"
        component={RadioButtonType}
        checked={values.is_public}
        label="Visibilidade"
        FormControlLabelOne="Público"
        FormControlLabelTwo="Privado" />

      <Field
        onChange={handleChange('is_grupal')}
        name="is_grupal"
        component={RadioButtonType}
        checked={values.is_grupal}
        label="Grupo"
        FormControlLabelOne="Resposta Individual"
        FormControlLabelTwo="Resposta em grupo" />

      <Field
        onChange={handleChange('single_answer')}
        name="single_answer"
        component={RadioButtonType}
        checked={values.single_answer}
        label="Único envio"
        FormControlLabelOne="Uma única resposta pode ser enviada"
        FormControlLabelTwo="Várias respostas podem ser enviadas" />
    </Fragment>
  )

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%', marginBottom: '2%' }}>
      <Title title="Adicionar missões" />
      <form className='form' onSubmit={postCreateMission}>
        <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome" />
        <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" rows="5" />
        <Field onChange={handleChange('end_message')} name="end_message" component={RenderTextField} type='text' label="Mensagem Final" rows="5" />
        <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos" />

        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Field onChange={handleChange('start_time')} name="start_time" component={DataPicker} label={"Data de Início"} selectedDate={values.start_time} />
          <Field onChange={handleChange('end_time')} name="end_time" component={DataPicker} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time} />
        </Grid>

        <Field onChange={handleChange('has_text')} name="has_text" component={RadioButtonTypeSent} checked={values.has_text} label="Texto" />
        <Field onChange={handleChange('has_image')} name="has_image" component={RadioButtonTypeSent} checked={values.has_image} label="Imagem" />
        <Field onChange={handleChange('has_audio')} name="has_audio" component={RadioButtonTypeSent} checked={values.has_audio} label="Áudio" />
        <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={RadioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização" />
        {
          /*
          <Field onChange={handleChange('has_video')} name="has_video" component={RadioButtonTypeSent} checked={values.has_video} label="Vídeo" />
          */
        }

        <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />

        {openAdvancedOptions && advancedOptions}

        <ButtomSubmit title={!request ? "Cadastrar Missão" : "Cadastrando..."} disabled={!(buttonSubmitValidate && !request)} />
      </form>

    </Card>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)