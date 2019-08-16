import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'


var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  
  const requiredFields = [ 'name', 'email', 'password', 'type' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

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

const radioButtonVisibilidade = ({ input, label, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Público" id='radioButtonCor'/>
      <FormControlLabel value="male" control={<Radio />} label="Privado" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const radioButtonRespostaEnviada = ({ input, label, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="unicaResposta" control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
      <FormControlLabel value="variasResposta" control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const calendario = ({ input, selectedDate }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      {...input}
      clearable
      id="date-picker-dialog"
      label="Date picker dialog"
      value={selectedDate}
      minDate={new Date()}
      format="dd/MM/yyyy"
      />
  </MuiPickersUtilsProvider>
)


function MaterialUiForm() {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
    institution: '',
    
  })
  const [selectedDate, setSelectedDate] = useState(new Date())
  
  function handleDateChange(date) {
    setSelectedDate(date)
  }
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
/*
  const enviar = () => {
    PersonApi.postPersonApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  }
  */
  const disabledButton = () => {
    if(values.type === 'professor' || values.type === 'estudante') {
      return (values.institution === '' && buttonSubmitValidate)
    }
  }

  return (

    <form id="form" >
      <Field onChange={handleChange('name')} name="name" component={renderInput} type='text' label="Título"/>
      <Field onChange={handleChange('name')} name="name" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('pontos')} name="pontos" component={renderInput} type='number' label="Pontos"/>
      <Field onChange={handleChange('visibilidade')} name="visibilidade" component={radioButtonVisibilidade} label="Visibilidade"/>
      <div></div>
      <Field onChange={handleChange('unicoEnvio')} name="unicoEnvio" component={radioButtonRespostaEnviada} label="Único envio"/>
      <Field onChange={handleDateChange} name="calendario" component={calendario} selectedDate={selectedDate}/>
    <div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(!disabledButton() && buttonSubmitValidate)} onClick={console.log('enviou')}> Cadastrar </Button>
    </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm2',  // a unique identifier for this form
  validate
})(MaterialUiForm)