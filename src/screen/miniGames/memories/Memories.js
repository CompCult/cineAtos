import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTableAdd } from "../../../components/Title";

function Memories() {
    const [data, setData] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        MiniGamesApi.getMiniGamesMemoriesApi()
            .then(res => {
                const memories = res.data;
                setData(memories.reverse());
            })
            .finally(function () {
                setRequest(true);
            });
    }, [data.length]);

    const memoriesInformation = () => {
        const memoriesInformation = data.map(obj => {
            const options = <Link to={`/miniGames/informacao-memoria/${obj._id}`}> Opções </Link>;
            const memoriesInformation = [obj.title, obj.lux, obj.resources, obj.secret_code, options];
            return memoriesInformation;
        });

        return memoriesInformation;
    };

    const dataTable = {
        title: (
            <TitleTableAdd
                to="/miniGames/criar-memoria"
                title="Criar jogo"
                titleTable="jogos da memória"
            />
        ),
        columns: ["Título", "Lux", "Recursos", "Código secreto", "Opções"],
        data: memoriesInformation(),
        request: request,
        link: "/miniGames/informacao-memoria/"
    };

    return (
        <div className='App'>
            <MyContext.Provider value={dataTable}>
                <Table />
            </MyContext.Provider>
        </div>
    );
}

export default Memories;
