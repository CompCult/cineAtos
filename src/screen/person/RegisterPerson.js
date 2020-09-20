import React, { useState } from 'react';
import PersonApi from './PersonApi.js';
import { TitlePage } from "../../components/Title";
import Card from '../../components/Card';
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
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSubmit = async (event) => {
    event.institution = (event.type === 'gestor' || event.type === 'usuarioComum') ? '-' : event.institution
    event.can_edit = (event.can_edit === 'true') ? true : false
    delete event.confirmPassword
    delete event.can_edit
    await PersonApi.postPersonApi(event).then(res => {
      setValues(INITIAL_VALUES);
      toast.success("Novo usuário cadastrado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar novo usuário");
    })
  }

  return (
    <div className='App'>
      <TitlePage title='Pessoas' subTitle='Adicionar Usuário' />
      <Card>
        <Form handleSubmit={handleSubmit} initialValues={values} />
      </Card>
    </div>
  )
}

export default RegisterPersonForm