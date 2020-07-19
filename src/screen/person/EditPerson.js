import React, { useState } from "react";
import PersonApi from "./PersonApi.js";
import { useHistory } from "react-router-dom"
import { Title } from "../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from './componentsPerson/Form';

function EditPerson({ person }) {
  const [values] = useState(person);
  const [password] = useState(person.password);
  let history = useHistory()

  const setValuesInitial = (values) => {
    let value = values;
    value.password = ''
    return value;
  }

  const handleSubmit = async (event) => {
    event.password = password;
    event.institution = (event.type === 'gestor' || event.type === 'usuarioComum') ? '-' : event.institution
    event.can_edit = (event.can_edit === 'true') ? true : false
    delete event.confirmPassword
    await PersonApi.putPersonApi(event, event._id).then(res => {
      history.replace(`/pessoas/informacao/${values._id}`)
      toast.success("Usuário editado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar usuário");
    });
  };

  return (
    <Card className='form-edit'>
      <Title title="Atualizar usuário" />
      <Form handleSubmit={handleSubmit} initialValues={setValuesInitial(values)} />
    </Card>
  );
}

export default EditPerson;
