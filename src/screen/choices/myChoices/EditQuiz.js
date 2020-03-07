import React, { useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from '../componentsChoice/Form';

function EditQuiz({ quiz }) {
  const [values] = useState(quiz);
  let history = useHistory()

  const handleSubmit = async (event) => {
    await ChoicesApi.putChoicesApi(event, event._id).then(res => {
      history.replace(`/quiz/meus-quizes/${values._id}`)
      toast.success("Quizz editado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar Quizz");
    });
  };

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2%' }}>
      <Title title="Atualizar quizz" />
      <Form handleSubmit={handleSubmit} initialValues={values} />
    </Card>
  );
}
export default EditQuiz;
