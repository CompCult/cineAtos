import React from "react";
import MissionsApi from "../MissionsApi.js";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";
import { toast } from "react-toastify";

export default function DeleteMission({ id }) {
  let history = useHistory();

  const deleteMission = () => {
    MissionsApi.deleteMissionApi(id).then(res => {
      history.push("/missoes/minhas-missoes");
      toast.success("Missão deletada com sucesso!");
    });
  };

  return <Delete name={"esta missão"} onClick={deleteMission} />;
}
