import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MissionsApi from "../MissionsApi";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTable } from "../../../components/Title";

function AllMissions() {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);
  useEffect(() => {
    MissionsApi.getAllMissionsApi()
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
      console.log(obj);
      const options = (
        <Link to={`/missoes/todas-missoes/${obj._id}`}> Opções </Link>
      );
      const missionsInformation = [
        obj.name,
        obj.points,
        obj.secret_code,
        obj.isEntrepreneurial === false ? "Não" : "Sim",
        options
      ];
      return missionsInformation;
    });

    return missionsInformation;
  };

  const dataTable = {
    title: <TitleTable titleTable="todas as missões" />,
    columns: ["Name", "Pontos", "Código Secreto", "Missão de Empreendedorismo", "Opções"],
    data: missionsInformation(),
    request: request,
    link: "/missoes/todas-missoes/"
  };

  return (
    <div className='App'>
      <MyContext.Provider value={dataTable}>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default AllMissions;
