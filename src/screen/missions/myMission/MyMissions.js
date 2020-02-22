import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MissionsApi from "../MissionsApi";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTableAdd } from "../../../components/Title";

function MyMissions() {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);
  useEffect(() => {
    MissionsApi.getMyMissionsApi()
      .then(res => {
        const missions = res.data;
        setData(missions.reverse());
      })
      .finally(function () {
        setRequest(true);
      });
  }, [data.length]);

  const missionsInformation = () => {
    const missionsInformation = data.map(obj => {
      const options = (
        <Link to={"/missoes/minhas-missoes/" + obj._id}> Opções </Link>
      );
      const missionsInformation = [
        obj.name,
        obj.points,
        obj.secret_code,
        options
      ];
      return missionsInformation;
    });

    return missionsInformation;
  };

  const dataTable = {
    title: (
      <TitleTableAdd
        to="/missoes/criar-missoes"
        title="Criar missão"
        titleTable="minhas missões"
      />
    ),
    columns: ["Name", "Pontos", "Código Secreto", "Opções"],
    data: missionsInformation(),
    request: request,
    link: "/missoes/minhas-missoes/"
  };

  return (
    <div className='App'>
      <MyContext.Provider value={dataTable}>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default MyMissions;
