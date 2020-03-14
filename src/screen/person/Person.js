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
        setData(person.reverse());
      })
      .finally(function () {
        setRequest(true);
      });
  }, [data.length]);

  const personInformation = () => {
    const personInformation = data.map(obj => {
      const options = <Link to={`/pessoas/${obj._id}`}> Opções </Link>;
      const personInformation = [obj.name, obj.email, obj.points, options];
      return personInformation;
    });

    return personInformation;
  };

  const dataTable = {
    title: (
      <TitleTableAdd
        to="/pessoas/criar-usuario"
        title="Criar usuário"
        titleTable="pessoas"
      />
    ),
    columns: ["Name", "Email", "Pontos", "Opções"],
    data: personInformation(),
    request: request,
    link: "/pessoas/informacao/"
  };

  return (
    <div className='App'>
      <MyContext.Provider value={dataTable}>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default Person;
