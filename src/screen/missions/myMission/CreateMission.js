import React, { useState } from 'react'
import MissionsApi from '../MissionsApi.js'
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from '../componentsMission/Form';

const INITIAL_VALUES = {
  start_time: new Date(),
  end_time: new Date(),
  name: '',
  description: '',
  end_message: '',
  lux: '',
  resources: '',
  is_public: true,
  is_grupal: true,
  single_answer: true,
  has_image: false,
  has_video: false,
  has_text: false,
  has_audio: false,
  has_geolocation: false,
  isEntrepreneurial: false
}

function CreateMissionForm() {
  let history = useHistory()
  const [values] = useState(INITIAL_VALUES);

  const handleSubmit = async (event) => {
    await MissionsApi.postMissionsApi(event).then(res => {
      history.push("/missoes/minhas-missoes")
      toast.success("Nova missão cadastrada com sucesso!");
    }).catch(error => {
      toast.error("Erro ao cadastrar nova Missão");
    })
  }

  return (
    <Card className='form-register'>
      <Title title="Adicionar missões" />
      <Form handleSubmit={handleSubmit} initialValues={values} />
    </Card>
  )
}

export default CreateMissionForm