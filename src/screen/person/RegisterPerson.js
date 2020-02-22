import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import PersonApi from './PersonApi.js'
import { ButtomSubmit } from "../../components/buttom/Buttom";
import { RenderTextField, SelectField } from '../../components/form/Form'
import { useHistory } from "react-router-dom"
import { Title } from "../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'type']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo não pode ser vazio'
    }

    let containsOnlySpaces = values[field] + ""
    if (containsOnlySpaces.trim() === "") {
      errors[field] = 'Campo não pode conter só espaços vazios'
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
    institution: '-'
  })

  const [request, setRequest] = useState(false);

  const [array] = useState([
    { value: 'professor', label: 'Professor' },
    { value: 'estudante', label: 'Estudante' },
    { value: 'gestor', label: 'Gestor' },
    { value: 'usuarioComum', label: 'Usuário Comum' },
  ])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const postNewUser = async (event) => {
    event.preventDefault();
    setRequest(true)
    const person = {
      name: values.name,
      email: values.email,
      password: values.password,
      type: values.type,
      institution: (values.type === 'gestor' || values.type === 'usuarioComum') ? '-' : values.institution
    }
    await PersonApi.postPersonApi(person).then(res => {
      history.push("/pessoas")
      toast.success("Novo usuário cadastrado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar novo usuário");
      setRequest(false)
    })
  }

  const disabledButton = () => {
    if (values.type === 'professor' || values.type === 'estudante') {
      return (values.institution === '' && buttonSubmitValidate)
    }
  }

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }}>
      <Title title="Adicionar usuário" />
      <form className='form' onSubmit={postNewUser}>
        <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome completo" />
        <Field onChange={handleChange('email')} name="email" component={RenderTextField} type='email' label="Email" />
        <Field onChange={handleChange('password')} name="password" component={RenderTextField} type='password' label="Senha" />
        <Field onChange={handleChange('confirmPassword')} name="confirmPassword" component={RenderTextField} type='password' label="Confirma a senha" />
        <Field onChange={handleChange('type')} name="type" component={SelectField} label="Opções" valueDefault={values.type} erro={values.type === ''} array={array} />

        {(values.type === 'professor' || values.type === 'estudante') &&
          <Field onChange={handleChange('institution')} name="institution" component={RenderTextField} type='text' label="Instituição" />
        }

        <ButtomSubmit title={!request ? "Cadastrar usuário" : "Cadastrando..."} disabled={!(!disabledButton() && buttonSubmitValidate && !request)} />

      </form>

    </Card>
  )
}

export default reduxForm({
  form: 'MaterialUiFormPerson',  // a unique identifier for this form
  validate
})(RegisterPersonForm)