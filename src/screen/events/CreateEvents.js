import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import Input from '@material-ui/core/Input'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  
  const requiredFields = [ 'titulo', 'descricao', 'pontos' ]
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

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true}/>
      <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
)

function CreateEventsForm() {
  
  const [values, setValues] = useState({
    nome: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    descricao: '',
    local: ''
  })
  
  const handleChange = name => event => {
    if(name === 'dataInicio' || name === 'dataFim'){
      setValues({ ...values, [name]: event })
    }else {
      setValues({ ...values, [name]: event.target.value })
    }
  }
  console.log(values)
/*  const enviar = () => {
    PersonApi.postPersonApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  } */

  return (

    <form id="form" >
      <Field onChange={handleChange('nome')} name="nome" component={renderInput} type='text' label="Nome"/>
      <Field onChange={handleChange('dataInicio')} name="dataInicio" component={calendario} label={"Data de Início"} selectedDate={values.dataInicio}/>
      <Field onChange={handleChange('dataFim')} name="dataFim" component={calendario} label={"Data de Fim"} minData={values.dataInicio} selectedDate={values.dataFim}/>
      <Field onChange={handleChange('descricao')} name="descricao" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('local')} name="local" component={renderInput} type='text' label="Local"/>
      <Field onChange={handleChange('tipo')} name="tipo" component={renderInput} type='text' label="Tipo"/>
      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={console.log('enviou')}> Cadastrar </Button>
    
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormEvents',  // a unique identifier for this form
  validate
})(CreateEventsForm)