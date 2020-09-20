import React, { useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import { TitlePage } from "../../../components/Title";
import { toast } from "react-toastify";
import Form from '../componentsChoice/Form';
import Card from '../../../components/Card';

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
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSubmit = async event => {
    await ChoicesApi.postChoicesApi(event).then(res => {
      setValues(INITIAL_VALUES);
      toast.success("Novo quizz cadastrado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar novo Quizz");
    });
  };

  return (
    <div className='App'>
      <TitlePage title='Quizz' subTitle='Adicionar Quizz' />
      <Card>
        <Form handleSubmit={handleSubmit} initialValues={values} />
      </Card>
    </div>
  );
}
export default CreateChoicesForm;