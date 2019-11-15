import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import PersonApi from './PersonApi.js'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { RenderTextField, SelectField } from '../../components/form/Form'
import { useHistory } from "react-router-dom"
var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'type']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Different passwords'
  }
  buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
  return errors
}

function RegisterPersonForm() {
  let history = useHistory()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    institution: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })

  }

  const postNewUser = async (event) => {
    event.preventDefault();
    const person = {
      name: values.name,
      email: values.email,
      password: values.password,
      type: values.type,
      institution: (values.type === 'gestor' || values.type === 'usuarioComum') ? '' : values.institution
    }
    await PersonApi.postPersonApi(person).then(res => {
    }).catch(error => {
      console.log(error)
    })

    setTimeout(() => history.replace("/pessoas"), 10)

  }

  const disabledButton = () => {
    if (values.type === 'professor' || values.type === 'estudante') {
      return (values.institution === '' && buttonSubmitValidate)
    }
  }

  return (
    <form id='form' onSubmit={postNewUser}>
      <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Full Name" />
      <Field onChange={handleChange('email')} name="email" component={RenderTextField} type='email' label="Email" />
      <Field onChange={handleChange('password')} name="password" component={RenderTextField} type='password' label="Password" />
      <Field onChange={handleChange('confirmPassword')} name="confirmPassword" component={RenderTextField} type='password' label="Confirm Password" />
      <Field onChange={handleChange('type')} name="type" component={SelectField} label="Options" erro={values.type === ''}>
        <MenuItem value="professor">Professor</MenuItem>
        <MenuItem value="estudante">Estudante</MenuItem>
        <MenuItem value="gestor">Gestor</MenuItem>
        <MenuItem value="usuarioComum">Usuário Comum</MenuItem>
      </Field>
      {(values.type === 'professor' || values.type === 'estudante') &&
        <Field onChange={handleChange('institution')} name="institution" component={RenderTextField} type='text' label="institution" />
      }
      <Button type='submit' variant="contained" color="secondary" disabled={!(!disabledButton() && buttonSubmitValidate)}>Cadastrar</Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormPerson',  // a unique identifier for this form
  validate
})(RegisterPersonForm)