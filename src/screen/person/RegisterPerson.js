import React, { useState } from 'react'
import PersonApi from './PersonApi.js'
import { useHistory } from "react-router-dom"
import { Title } from "../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from './componentsPerson/Form';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  type: '',
  institution: '',
  can_edit: 'false'
}

function RegisterPersonForm() {
  let history = useHistory()
  const [values] = useState(INITIAL_VALUES)

  const handleSubmit = async (event) => {
    event.institution = (event.type === 'gestor' || event.type === 'usuarioComum') ? '-' : event.institution
    event.can_edit = (event.can_edit === 'true') ? true : false
    delete event.confirmPassword
    delete event.can_edit
    await PersonApi.postPersonApi(event).then(res => {
      history.push("/pessoas")
      toast.success("Novo usuário cadastrado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar novo usuário");
    })
  }

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }}>
      <Title title="Adicionar usuário" />
      <Form handleSubmit={handleSubmit} initialValues={values} />
    </Card>
  )
}

export default RegisterPersonForm