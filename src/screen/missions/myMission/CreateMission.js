import React, { useState } from 'react';
import MissionsApi from '../MissionsApi.js';
import { TitlePage } from "../../../components/Title";
import { toast } from "react-toastify";
import Form from '../componentsMission/Form';
import Card from '../../../components/Card';

const INITIAL_VALUES = {
  start_time: new Date(),
  end_time: new Date(),
  name: '',
  description: '',
  end_message: '',
  lux: '',
  resources: '',
  is_public: true,
  is_grupal: false,
  single_answer: true,
  has_image: false,
  has_video: false,
  has_text: false,
  has_audio: false,
  has_geolocation: false,
  isEntrepreneurial: false
}

function CreateMissionForm() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSubmit = async (event) => {
    await MissionsApi.postMissionsApi(event).then(res => {
      setValues(INITIAL_VALUES);
      toast.success("Nova missão cadastrada com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar nova Missão");
    })
  }

  return (
    <div className='App'>
      <TitlePage title='Missão' subTitle='Adicionar Missão' />
      <Card>
        <Form handleSubmit={handleSubmit} initialValues={values} />
      </Card>
    </div >
  )
}

export default CreateMissionForm