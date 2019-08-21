import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import MissionsApi from './MissionsApi.js'
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  
  const requiredFields = ['name', 'description', 'end_message', 'points', 'has_image', 'has_video', 'has_text', 'has_audio', 'has_geolocation']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false

  return errors
}

const renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {

  if (touched && error) {
    return (
      <FormControl fullWidth id='marginForm'>
        <InputLabel htmlFor="name-error" error>{label}</InputLabel>
        <Input type={type} {...input} {...custom} error/>
        <FormHelperText error>{touched && error}</FormHelperText>
      </FormControl>
    )
  }

  return (
    <FormControl fullWidth id='marginForm'>
      <InputLabel>{label}</InputLabel>
      <Input type={type} {...input} {...custom}/>
    </FormControl>
  )
}

const radioButtonVisibilidade = ({ input, label, selectedValue, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="true" checked={selectedValue === true} control={<Radio />} label="Público" id='radioButtonCor'/>
      <FormControlLabel value="false" checked={selectedValue === false} control={<Radio />} label="Privado" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const radioButtonGrupo = ({ input, label, selectedValue, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="true" checked={selectedValue === true} control={<Radio />} label="Resposta em grupo" id='radioButtonCor'/>
      <FormControlLabel value="false" checked={selectedValue === false} control={<Radio />} label="Resposta Individual" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const radioButtonRespostaEnviada = ({ input, label, selectedValue, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="true" checked={selectedValue === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
      <FormControlLabel value="false" checked={selectedValue === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const radioButtonTipoEnviou = ({ input, label, ...rest }) => (
  <div  id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel value="true" control={<Radio />} label="Sim" id='radioButtonCor'/>
      <FormControlLabel value="false" control={<Radio />} label="Nao" id='radioButtonCor'/>
    </RadioGroup>
  </div>
)

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true}/>
      <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
)

function CreateMissionForm() {
  
  const [values, setValues] = useState({
    start_time: new Date(),
    end_time: new Date(),
    name: '',
    description: '',
    end_message: '',
    points: '',
    is_public: true,
    is_grupal: true,
    single_answer: true,
    has_image: '',
    has_video: '',
    has_text: '',
    has_audio: '',
    has_geolocation: '',
  })
  
  const handleChange = name => event => {
    if(name === 'start_time' || name === 'end_time'){
      setValues({ ...values, [name]: event })
    }
    else if(name === 'is_public' || name === 'single_answer' || name === 'is_grupal' || name === 'has_image' || name === 'has_video' || name === 'has_text' || name === 'has_audio' || name === 'has_geolocation') {
      setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
    }else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateChoices = () => {
    MissionsApi.postMissionsApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  } 

  return (

    <form id="form" >
      <Field onChange={handleChange('start_time')} name="start_time" component={calendario} label={"Data de Início"} selectedDate={values.dataInicio}/>
      <Field onChange={handleChange('end_time')} name="end_time" component={calendario} label={"Data de Fim"} minData={values.dataInicio} selectedDate={values.dataFim}/>
     
      <Field onChange={handleChange('name')} name="name" component={renderInput} type='text' label="Nome"/>
      <Field onChange={handleChange('description')} name="description" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('end_message')} name="end_message" component={renderInput} type='text' label="Mensagem Final"/>
      <Field onChange={handleChange('points')} name="points" component={renderInput} type='number' label="Pontos"/>
      <Field onChange={handleChange('is_public')} name="is_public" component={radioButtonVisibilidade} selectedValue={values.is_public} label="Visibilidade"/>
      <div></div>
      <Field onChange={handleChange('is_grupal')} name="is_grupal" component={radioButtonGrupo} selectedValue={values.is_grupal} label="Grupo"/>
      <div></div>
      <Field onChange={handleChange('single_answer')} name="single_answer" component={radioButtonRespostaEnviada} selectedValue={values.single_answer} label="Único envio"/>
      <div></div>
      <Field onChange={handleChange('has_image')} name="has_image" component={radioButtonTipoEnviou} label="Imagem"/>
      <Field onChange={handleChange('has_video')} name="has_video" component={radioButtonTipoEnviou} label="Vídeo"/>
      <Field onChange={handleChange('has_text')} name="has_text" component={radioButtonTipoEnviou} label="Texto"/>
      <Field onChange={handleChange('has_audio')} name="has_audio" component={radioButtonTipoEnviou} label="Áudio"/>
      <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={radioButtonTipoEnviou} label="Geolocalização"/>

      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={postCreateChoices}> Cadastrar </Button>
    
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)