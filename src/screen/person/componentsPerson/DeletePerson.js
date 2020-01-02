import React from "react";
import PersonApi from "../PersonApi.js";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";

export default function DeletePerson({ id }) {
  let history = useHistory();

  const deletePerson = () => {
    PersonApi.deletePersonApi(id).then(res => {
      console.log(res);
    });
    history.replace("/pessoas");
  };

  return <Delete name={"esse usuário"} onClick={deletePerson} />;
}
