import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import PersonApi from './PersonApi.js'
import { ButtomSubmit } from "../../components/buttom/Buttom";
import MenuItem from '@material-ui/core/MenuItem'
import { RenderTextField, SelectField } from '../../components/form/Form'
import { useHistory } from "react-router-dom"
import { TitleEdit } from "../../components/Title";

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'type']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo não pode ser vazio'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido'
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Senhas diferentes'
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
      institution: (values.type === 'gestor' || values.type === 'usuarioComum') ? '-' : values.institution
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
    <form className='form' onSubmit={postNewUser}>
      <TitleEdit title="Adicionar usuário" />
      <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome completo" />
      <Field onChange={handleChange('email')} name="email" component={RenderTextField} type='email' label="Email" />
      <Field onChange={handleChange('password')} name="password" component={RenderTextField} type='password' label="Senha" />
      <Field onChange={handleChange('confirmPassword')} name="confirmPassword" component={RenderTextField} type='password' label="Confirma a senha" />
      <Field onChange={handleChange('type')} name="type" component={SelectField} label="Opções" erro={values.type === ''}>
        <MenuItem value="professor">Professor</MenuItem>
        <MenuItem value="estudante">Estudante</MenuItem>
        <MenuItem value="gestor">Gestor</MenuItem>
        <MenuItem value="usuarioComum">Usuário Comum</MenuItem>
      </Field>
      {(values.type === 'professor' || values.type === 'estudante') &&
        <Field onChange={handleChange('institution')} name="institution" component={RenderTextField} type='text' label="Instituição" />
      }

      <ButtomSubmit title="Cadastrar usuário" disabled={!(!disabledButton() && buttonSubmitValidate)} />

    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormPerson',  // a unique identifier for this form
  validate
})(RegisterPersonForm)