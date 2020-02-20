import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTableAdd } from "../../../components/Title";

function Hangmans() {
    const [data, setData] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        MiniGamesApi.getMiniGamesHangmansApi()
            .then(res => {
                const hangmans = res.data;
                setData(hangmans.reverse());
            })
            .finally(function () {
                setRequest(true);
            });
    }, [data.length]);

    const hangmansInformation = () => {
        const hangmansInformation = data.map(obj => {
            const options = <Link to={"/miniGames/informacao-forca/" + obj._id}> Opções </Link>;
            const hangmansInformation = [obj.title, obj.points, obj.secret_code, options];
            return hangmansInformation;
        });

        return hangmansInformation;
    };

    const dataTable = {
        title: (
            <TitleTableAdd
                to="/miniGames/criar-forca"
                title="Criar jogo"
                titleTable="jogos da forca"
            />
        ),
        columns: ["Título", "Pontos", "Código secreto", "Opções"],
        data: hangmansInformation(),
        request: request,
        link: "/miniGames/informacao-forca/"
    };

    return (
        <div style={{ marginTop: 90 }}>
            <MyContext.Provider value={dataTable}>
                <Table />
            </MyContext.Provider>
        </div>
    );
}

export default Hangmans;
