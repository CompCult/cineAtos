import React from "react";
import MiniGamesApi from "../MiniGamesApi";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";
import { toast } from "react-toastify";

export default function DeleteMemories({ id }) {
    let history = useHistory();

    const deleteMemories = () => {
        MiniGamesApi.deleteMiniGamesMemoriesApi(id).then(res => {
            history.replace("/miniGames/menoria");
            toast.success("Jogo deletado com sucesso!");
        });
    };

    return <Delete name={"esse MineGame"} onClick={deleteMemories} />;
}
