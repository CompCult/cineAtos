import React, { useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import { useHistory } from "react-router-dom";
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from '../componentsChoice/Form';

const INITIAL_VALUES = {
  title: "",
  description: "",
  lux: '',
  resources: '',
  is_public: true,
  single_answer: true,
  start_time: new Date(),
  end_time: new Date(),
  alternative_a: "",
  alternative_b: "",
  alternative_c: "",
  alternative_d: "",
  alternative_e: "",
  correct_answer: ""
}

function CreateChoicesForm() {
  let history = useHistory();
  const [values] = useState(INITIAL_VALUES);

  const handleSubmit = async event => {
    await ChoicesApi.postChoicesApi(event).then(res => {
      history.push("/quiz/meus-quizes")
      toast.success("Novo quizz cadastrado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar novo Quizz");
    });
  };

  return (
    <Card className='form-register'>
      <Title title="Adicionar quizz" />
      <Form handleSubmit={handleSubmit} initialValues={values} />
    </Card>
  );
}
export default CreateChoicesForm;