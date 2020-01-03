import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import MissionsApi from '../MissionsApi.js'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { DataPicker, RenderTextField, RadioButtonTypeSent, RadioButton } from '../../../components/form/Form'
import { useHistory } from "react-router-dom"

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
    points: '',
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
      <Field onChange={handleChange('is_public')} name="is_public" component={RadioButton} label="Visibilidade">
        <FormControlLabel value="true" checked={values.is_public === true} control={<Radio />} label="Público" id='radioButtonCor' />
        <FormControlLabel value="false" checked={values.is_public === false} control={<Radio />} label="Privado" id='radioButtonCor' />
      </Field>
      <div></div>
      <Field onChange={handleChange('is_grupal')} name="is_grupal" component={RadioButton} label="Grupo">
        <FormControlLabel value="false" checked={values.is_grupal === false} control={<Radio />} label="Resposta Individual" id='radioButtonCor' />
        <FormControlLabel value="true" checked={values.is_grupal === true} control={<Radio />} label="Resposta em grupo" id='radioButtonCor' />
      </Field>
      <div></div>
      <Field onChange={handleChange('single_answer')} name="single_answer" component={RadioButton} label="Único envio">
        <FormControlLabel value="true" checked={values.single_answer === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor' />
        <FormControlLabel value="false" checked={values.single_answer === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor' />
      </Field>
      <div></div>
    </Fragment>
  )

  return (
    <form id="form" >
      <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome" />
      <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" />
      <Field onChange={handleChange('end_message')} name="end_message" component={RenderTextField} type='text' label="Mensagem Final" />
      <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos" />
      <Field onChange={handleChange('start_time')} name="start_time" component={DataPicker} label={"Data de Início"} selectedDate={values.start_time} />
      <Field onChange={handleChange('end_time')} name="end_time" component={DataPicker} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time} />

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
        <Button variant="contained" size="large" color="primary" onClick={handleClickAdvancedOptions}>Opções Avançadas</Button>
      </div>

      {openAdvancedOptions && advancedOptions}
      <Button type="submit" variant="contained" color="primary" disabled={!(buttonSubmitValidate)} onClick={postCreateMission}> Cadastrar </Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)