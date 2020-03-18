import React, { useEffect, useState } from "react";
import ChoicesApi from "../ChoicesApi";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTable } from "../../../components/Title";

function AllChoices() {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    ChoicesApi.getAllChoicesApi()
      .then(res => {
        const choices = res.data;
        setData(choices.reverse());
      })
      .finally(function() {
        setRequest(true);
      });
  }, [data.length]);

  const choicesInformation = () => {
    const choicesInformation = data.map(obj => {
      const options = (
        <Link to={`/quiz/todos-quizes/${obj._id}`}> Opções </Link>
      );
      const choicesInformation = [
        obj.title,
        obj.description,
        obj.secret_code,
        options
      ];
      return choicesInformation;
    });

    return choicesInformation;
  };

  const dataTable = {
    title: <TitleTable titleTable="todos os quizzes" />,
    columns: ["Titulo", "Descrição", "Código secreto", "Opções"],
    data: choicesInformation(),
    request: request,
    link: "/quiz/todos-quizes/"
  };

  return (
    <div className="App">
      <MyContext.Provider value={dataTable}>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default AllChoices;
