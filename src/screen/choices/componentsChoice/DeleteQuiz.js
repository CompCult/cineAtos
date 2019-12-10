import React from "react";
import ChoicesApi from "../ChoicesApi.js";
import { useHistory } from "react-router-dom";
import DeleteModal from "../../../components/ModalDelete";

export default function DeleteQuiz({ id }) {
  let history = useHistory();

  const deleteQuiz = () => {
    ChoicesApi.deleteChoicesApi(id).then(res => {
      console.log(res);
    });
    history.replace("/quiz/meus-quizes");
  };

  return <DeleteModal name={"esse quiz"} onClick={deleteQuiz} />;
}
