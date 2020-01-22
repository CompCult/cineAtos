import React from "react";
import MiniGamesApi from "../MiniGamesApi";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";

export default function DeletePerson({ id }) {
    let history = useHistory();

    const deleteMemories = () => {
        MiniGamesApi.deleteMiniGamesMemoriesApi(id).then(res => {
            console.log(res);
        });
        history.replace("/miniGames/menoria");
    };

    return <Delete name={"esse MineGame"} onClick={deleteMemories} />;
}
