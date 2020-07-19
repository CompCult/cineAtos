import React, { useState } from "react";
import MissionsApi from "../MissionsApi.js";
import { useHistory } from "react-router-dom"
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from '../componentsMission/Form';

function EditMission({ mission }) {
  let history = useHistory()
  const [values] = useState(mission);

  const handleSubmit = async (event) => {
    await MissionsApi.putMissionApi(event, event._id).then(res => {
      history.replace(`/missoes/minhas-missoes/${values._id}`)
      toast.success("Missão Editada com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar Missão");
    });
  };

  return (
    <Card className='form-edtit'>
      <Title title="Atualizar missões" />
      <Form handleSubmit={handleSubmit} initialValues={values} />
    </Card>
  );
}
export default EditMission
