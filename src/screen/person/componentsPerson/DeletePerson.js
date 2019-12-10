import React from "react";
import PersonApi from "../PersonApi.js";
import { useHistory } from "react-router-dom";
import DeleteModal from "../../../components/ModalDelete";

export default function DeletePerson({ id }) {
  let history = useHistory();

  const deletePerson = () => {
    PersonApi.deletePersonApi(id).then(res => {
      console.log(res);
    });
    history.replace("/pessoas");
  };

  return <DeleteModal name={"esse usuário"} onClick={deletePerson} />;
}
