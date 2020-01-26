import React from "react";
import MiniGamesApi from "../MiniGamesApi";
import { useHistory } from "react-router-dom";
import Delete from "../../../components/Delete";

export default function DeleteHangmans({ id }) {
    let history = useHistory();

    const deleteMemories = () => {
        MiniGamesApi.deleteMiniGamesHangmansApi(id).then(res => {
            history.replace("/miniGames/forca");
        });
    };

    return <Delete name={"esse MineGame"} onClick={deleteMemories} />;
}
