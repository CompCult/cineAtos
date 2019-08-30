import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import MissionsApi from './MissionsApi.js'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'description', 'end_message', 'points']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  
  buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
  return errors
}

const renderTextField = ({ label, type, input, meta: { touched, invalid, error }, ...custom}) => (
  <FormControl fullWidth id='marginForm'>
    <TextField  fullWidth label={label} placeholder={label} type={type}
      error={touched && invalid}
      helperText={touched && error}
      {...input} {...custom}/>
  </FormControl>
)

const radioButton = ({ input, label, children, ...rest }) => (
  <FormControl id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup {...input} {...rest}>
      {children}
    </RadioGroup>
  </FormControl>
)

const radioButtonTypeSent = ({ input, label, checked, ...rest }) => (
  <div id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel value="true" checked={checked === true} control={<Radio />} label="Sim" id='radioButtonCor'/>
      <FormControlLabel value="false" checked={checked === false} control={<Radio />} label="Nao" id='radioButtonCor'/>
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
    is_grupal: false,
    single_answer: true,
    has_image: false,
    has_video: false,
    has_text: false,
    has_audio: false,
    has_geolocation: false,
  })

  const [openAdvancedOptions, setAdvancedOptions] = React.useState(false)

  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions)
  }
  
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
      <Field onChange={handleChange('name')} name="name" component={renderTextField} type='text' label="Nome"/>
      <Field onChange={handleChange('description')} name="description" component={renderTextField} type='text' label="Descrição"/>
      <Field onChange={handleChange('end_message')} name="end_message" component={renderTextField} type='text' label="Mensagem Final"/>
      <Field onChange={handleChange('points')} name="points" component={renderTextField} type='number' label="Pontos"/>
      <Field onChange={handleChange('start_time')} name="start_time" component={calendario} label={"Data de Início"} selectedDate={values.start_time}/>
      <Field onChange={handleChange('end_time')} name="end_time" component={calendario} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time}/>
      
      <Field onChange={handleChange('has_image')} name="has_image" component={radioButtonTypeSent} checked={values.has_image} label="Imagem"/>
      <Field onChange={handleChange('has_video')} name="has_video" component={radioButtonTypeSent} checked={values.has_video} label="Vídeo"/>
      <Field onChange={handleChange('has_text')} name="has_text" component={radioButtonTypeSent} checked={values.has_text} label="Texto"/>
      <Field onChange={handleChange('has_audio')} name="has_audio" component={radioButtonTypeSent} checked={values.has_audio} label="Áudio"/>
      <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={radioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização"/>
      
      <div id='marginForm'>
        <Button size="large" onClick={handleClickAdvancedOptions}>Opções Avançadas</Button>
      </div>

      {openAdvancedOptions && (
        <Fragment>
          <Field  onChange={handleChange('is_public')} name="is_public" component={radioButton} label="Visibilidade">
            <FormControlLabel value="true" checked={values.is_public === true}  control={<Radio />} label="Público" id='radioButtonCor'/>
            <FormControlLabel value="false" checked={values.is_public === false}  control={<Radio />} label="Privado" id='radioButtonCor'/>
          </Field>
          <div></div>
          <Field  onChange={handleChange('is_grupal')} name="is_grupal" component={radioButton} label="Grupo">
            <FormControlLabel value="false" checked={values.is_grupal === false}  control={<Radio />} label="Resposta Individual" id='radioButtonCor'/>
            <FormControlLabel value="true" checked={values.is_grupal === true}  control={<Radio />} label="Resposta em grupo" id='radioButtonCor'/>
          </Field>
          <div></div>
          <Field  onChange={handleChange('single_answer')} name="single_answer" component={radioButton} label="Único envio">
            <FormControlLabel value="true" checked={values.single_answer === true}  control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
            <FormControlLabel value="false" checked={values.single_answer === false}  control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
          </Field>
          <div></div>
        </Fragment>
      )}
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={postCreateChoices}> Cadastrar </Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)