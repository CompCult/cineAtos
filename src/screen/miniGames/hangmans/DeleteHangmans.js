import React from "react";
import MiniGamesApi from "../MiniGamesApi";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";
import { toast } from "react-toastify";

export default function DeleteHangmans({ id }) {
    let history = useHistory();

    const deleteMemories = () => {
        MiniGamesApi.deleteMiniGamesHangmansApi(id).then(res => {
            history.replace("/miniGames/forca");
            toast.success("Jogo deletado com sucesso!");
        });
    };

    return <Delete name={"esse MineGame"} onClick={deleteMemories} />;
}
