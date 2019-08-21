import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import ChoicesApi from './ChoicesApi.js'
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
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
  
  const requiredFields = ['title', 'description', 'points', 'alternative_a','alternative_b','alternative_c','alternative_d','alternative_e', 'correct_answer']
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

const radioButtonRespostaEnviada = ({ input, label, selectedValue, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="true" checked={selectedValue === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
      <FormControlLabel value="false" checked={selectedValue === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true}/>
      <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
)

const renderInputSelect = ({ input, label, value, ...custom }) => (
  <FormControl fullWidth id='marginForm'>
    <InputLabel>{label}</InputLabel>
    <Select value={value} name="name" {...input} {...custom}>
      <MenuItem value="a">A</MenuItem>
      <MenuItem value="b">B</MenuItem>
      <MenuItem value="c">C</MenuItem>
      <MenuItem value="d">D</MenuItem>
      <MenuItem value="e">E</MenuItem>
    </Select>
  </FormControl>
)

function CreateChoicesForm() {
  
  const [values, setValues] = useState({
    title: '',
    description: '',
    points: '',
    is_public: true,
    single_answer: true,
    start_time: new Date(),
    end_time: new Date(),
    alternative_a: '',
    alternative_b: '',
    alternative_c: '',
    alternative_d: '',
    alternative_e: '',
    correct_answer: ''
  })
  
  const handleChange = name => event => {
    if(name === 'start_time' || name === 'end_time'){
      setValues({ ...values, [name]: event })
    }
    else if(name === 'is_public' || name === 'single_answer') {
      setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
    }else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateChoices = () => {
    ChoicesApi.postChoicesApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  } 

  return (

    <form id="form" >
      <Field onChange={handleChange('title')} name="title" component={renderInput} type='text' label="Título"/>
      <Field onChange={handleChange('description')} name="description" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('points')} name="points" component={renderInput} type='number' label="Pontos"/>
      <Field onChange={handleChange('is_public')} name="is_public" component={radioButtonVisibilidade} selectedValue={values.is_public} label="Visibilidade"/>
      <div></div>
      <Field onChange={handleChange('single_answer')} name="single_answer" component={radioButtonRespostaEnviada} selectedValue={values.single_answer} label="Único envio"/>
      <div></div>
      <Field onChange={handleChange('start_time')} name="start_time" component={calendario} label={"Data de Início"} selectedDate={values.start_time}/>
      <Field onChange={handleChange('end_time')} name="end_time" component={calendario} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time}/>

      <Field onChange={handleChange('alternative_a')} name="alternative_a" component={renderInput} type='text' label="Alternativa A"/>
      <Field onChange={handleChange('alternative_b')} name="alternative_b" component={renderInput} type='text' label="Alternativa B"/>
      <Field onChange={handleChange('alternative_c')} name="alternative_c" component={renderInput} type='text' label="Alternativa C"/>
      <Field onChange={handleChange('alternative_d')} name="alternative_d" component={renderInput} type='text' label="Alternativa D"/>
      <Field onChange={handleChange('alternative_e')} name="alternative_e" component={renderInput} type='text' label="Alternativa E"/>
     
      <Field onChange={handleChange('correct_answer')} name="correct_answer" component={renderInputSelect} type='text' label="Alternativa Correta"/>
      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={postCreateChoices}> Cadastrar </Button>
    
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormChoices',  // a unique identifier for this form
  validate
})(CreateChoicesForm)