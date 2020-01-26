import React from "react";
import ChoicesApi from "../ChoicesApi.js";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";
import { toast } from "react-toastify";

export default function DeleteQuiz({ id }) {
  let history = useHistory();

  const deleteQuiz = () => {
    ChoicesApi.deleteChoicesApi(id).then(res => {
      history.push("/quiz/meus-quizes");
      toast.success("Quizz deletado com sucesso!");
    });
  };

  return <Delete name={"esse quiz"} onClick={deleteQuiz} />;
}
