import React, { useState } from "react";
import PersonApi from "./PersonApi.js";
import { Title } from "../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from './componentsPerson/Form';

function EditPerson({ person }) {
  const [values] = useState(person);
  const [password] = useState(person.password);

  const setValuesInitial = (values) => {
    let value = values;
    value.password = ''
    return value;
  }

  const handleSubmit = async (event) => {
    event.password = password;
    await PersonApi.putPersonApi(event, event._id).then(res => {
      window.location.reload();
      toast.success("Usuário editado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar usuário");
    });
  };

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Title title="Atualizar usuário" />
      <Form handleSubmit={handleSubmit} initialValues={setValuesInitial(values)} />
    </Card>
  );
}

export default EditPerson;
