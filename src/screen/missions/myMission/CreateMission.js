import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import MissionsApi from '../MissionsApi.js'
import Button from '@material-ui/core/Button'
import { DataPicker, RenderTextField, RadioButtonTypeSent, RadioButtonType } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"
import { TitleEdit } from "../../../components/Title";
import Grid from "@material-ui/core/Grid";

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'description', 'end_message', 'points']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo não pode ser vazio'
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
    await MissionsApi.postMissionsApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })

    setTimeout(() => history.replace("/missoes/minhas-missoes"), 10)
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
    <form className='form'>
      <TitleEdit title="Adicionar missões" />
      <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome" />
      <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" />
      <Field onChange={handleChange('end_message')} name="end_message" component={RenderTextField} type='text' label="Mensagem Final" />
      <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos" />
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Field onChange={handleChange('start_time')} name="start_time" component={DataPicker} label={"Data de Início"} selectedDate={values.start_time} />
        <Field onChange={handleChange('end_time')} name="end_time" component={DataPicker} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time} />
      </Grid>
      <Field onChange={handleChange('has_text')} name="has_text" component={RadioButtonTypeSent} checked={values.has_text} label="Texto" />
      <Field onChange={handleChange('has_image')} name="has_image" component={RadioButtonTypeSent} checked={values.has_image} label="Imagem" />
      {
        /*
        <Field onChange={handleChange('has_video')} name="has_video" component={RadioButtonTypeSent} checked={values.has_video} label="Vídeo" />
        <Field onChange={handleChange('has_audio')} name="has_audio" component={RadioButtonTypeSent} checked={values.has_audio} label="Áudio" />
        <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={RadioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização" />
        */
      }
      <div id='marginForm'>
        <Button variant="contained" color="primary" onClick={handleClickAdvancedOptions}>
          Opções Avançadas
        </Button>
      </div>

      {openAdvancedOptions && advancedOptions}
      <Button type="submit" variant="contained" color="primary" disabled={!(buttonSubmitValidate)} onClick={postCreateMission}> Cadastrar Missão</Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)