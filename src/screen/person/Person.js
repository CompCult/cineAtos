import React, { useEffect, useState } from "react";
import PersonApi from "./PersonApi";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import MyContext from "../../components/MyContext";
import { TitleTableAdd } from "../../components/Title";

function Person() {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    PersonApi.getPersonApi()
      .then(res => {
        const person = res.data;
        setData(person);
      })
      .finally(function() {
        setRequest(true);
      });
  }, [data.length]);

  const personInformation = () => {
    const personInformation = data.map(obj => {
      const options = <Link to={"/pessoas/trackId=" + obj._id}> Opções </Link>;
      const personInformation = [obj.name, obj.email, obj.points, options];
      return personInformation;
    });

    return personInformation;
  };

  const dataTable = {
    title: (
      <TitleTableAdd
        to="/pessoas/register"
        title="Criar usuário"
        titleTable="pessoas"
      />
    ),
    columns: ["Name", "Email", "Pontos", "Opções"],
    data: personInformation(),
    request: request
  };

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  );
}

export default Person;
