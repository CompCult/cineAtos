import React from "react";
import MissionsApi from "../MissionsApi.js";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";

export default function DeleteMission({ id }) {
  let history = useHistory();

  const deleteMission = () => {
    MissionsApi.deleteMissionApi(id).then(res => {
      history.push("/missoes/minhas-missoes");
    });
  };

  return <Delete name={"esta missão"} onClick={deleteMission} />;
}
