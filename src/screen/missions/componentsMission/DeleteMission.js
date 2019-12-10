import React from "react";
import MissionsApi from "../MissionsApi.js";
import { useHistory } from "react-router-dom";
import DeleteModal from "../../../components/ModalDelete";

export default function DeleteMission({ id }) {
  let history = useHistory();

  const deleteMission = () => {
    MissionsApi.deleteMissionApi(id).then(res => {
      console.log(res);
    });
    history.replace("/missoes/minhas-missoes");
  };

  return <DeleteModal name={"esta missão"} onClick={deleteMission} />;
}
