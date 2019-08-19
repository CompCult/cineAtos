import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import PersonApi from './PersonApi.js'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

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

const renderInputSelect = ({ input, label, value, meta: { touched, error }, ...custom }) => {

  let menuItens = ( 
    <Select value={value} name="name" {...input} {...custom}>
      <MenuItem value="professor">Professor</MenuItem>
      <MenuItem value="estudante">Estudante</MenuItem>
      <MenuItem value="gestor">Gestor</MenuItem>
      <MenuItem value="usuarioComum">Usuário Comum</MenuItem>
    </Select>
  )
  if (touched && error) {
    return (
      <FormControl fullWidth id='marginForm'>
        <InputLabel htmlFor="name-error" error>{label}</InputLabel>
        {menuItens}
        <FormHelperText>{touched && error}</FormHelperText>
      </FormControl>
    )
  }

  return (
    <FormControl fullWidth  id='marginForm'>
      <InputLabel>{label}</InputLabel>
      {menuItens}
    </FormControl>
  )
}

function RegisterPersonForm() {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
    institution: ''
  })
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const enviar = () => {
    PersonApi.postPersonApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  }
  
  const disabledButton = () => {
    if(values.type === 'professor' || values.type === 'estudante') {
      return (values.institution === '' && buttonSubmitValidate)
    }
  }

  return (

    <form id="form" >
      <Field onChange={handleChange('name')} name="name" component={renderInput} type='text' label="Full Name"/>
      <Field onChange={handleChange('email')} name="email" component={renderInput} type='email' label="Email"/>
      <Field onChange={handleChange('password')} name="password" component={renderInput} type='password' label="Password"/>
      <Field onChange={handleChange('type')} name="type" component={renderInputSelect} value={values.type} label="Options"/>
     {(values.type === 'professor' || values.type === 'estudante') && 
        <Field onChange={handleChange('institution')} name="institution" component={renderInput} type='text' label="institution"/>
     }

     <Button type="submit" variant="contained" color="secondary" disabled={!(!disabledButton() && buttonSubmitValidate)} onClick={enviar}> Cadastrar </Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormPerson',  // a unique identifier for this form
  validate
})(RegisterPersonForm)