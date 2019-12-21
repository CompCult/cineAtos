import React, { useEffect, useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import Table from "../../../components/Table.js";
import MyContext from "../../../components/MyContext.js";
import { TitleTable } from "../../../components/Title";

function SeeAnswer({ id, titleChoices }) {
  const [choiceAnswers, setChoiceAnswers] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    ChoicesApi.getChoicesInformationAnswersApi(id)
      .then(res => {
        const choiceAnswers = res.data;
        setChoiceAnswers(choiceAnswers);
      })
      .finally(function () {
        setRequest(true);
      });
  }, [id]);

  const choicesInformation = () => {
    const choicesInformation = choiceAnswers.map(obj => {
      let status = obj.approved ? "aprovado" : "reprovado";
      const choicesInformation = [
        obj._user.name,
        obj._quiz.title,
        obj.answer,
        status
      ];
      return choicesInformation;
    });

    return choicesInformation;
  };

  const dataTable = {
    title: <TitleTable titleTable={"respostas do quiz " + titleChoices} />,
    columns: ["Usuario", "Titulo do quiz", "Opção marcada", "Opção correta"],
    data: choicesInformation(),
    request: request,
    noClick: true
  };

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  );
}

export default SeeAnswer;
