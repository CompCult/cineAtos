import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTableAdd } from "../../../components/Title";

function MiniGames() {
    const [data, setData] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        MiniGamesApi.getMiniGamesMemoriesApi()
            .then(res => {
                const person = res.data;
                setData(person);
            })
            .finally(function () {
                setRequest(true);
            });
    }, [data.length]);

    const miniGamesInformation = () => {
        const miniGamesInformation = data.map(obj => {
            const options = <Link to={"/miniGames/" + obj._id}> Opções </Link>;
            const personInformation = [obj.title, obj.points, obj.secret_code, options];
            return personInformation;
        });

        return miniGamesInformation;
    };

    const dataTable = {
        title: (
            <TitleTableAdd
                to="/miniGames/criar-miniGames"
                title="Criar miniGames"
                titleTable="miniGames"
            />
        ),
        columns: ["Título", "Pontos", "Código secreto", "Opções"],
        data: miniGamesInformation(),
        request: request,
        link: "/miniGames/informacao-menoria/"
    };

    return (
        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    );
}

export default MiniGames;
