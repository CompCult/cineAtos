import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import DeleteMemories from "./DeleteMemories";
import { Title, SubTitle } from "../../../components/Title";
import { useParams } from "react-router";
import Drawer from '../../../components/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemComponent } from '../../../components/ListItemComponent';

export default function InformationMemories() {
    let { id } = useParams();
    const [value, setValue] = useState(1);
    const [memories, setMemories] = useState({});

    useEffect(() => {
        MiniGamesApi.getMiniGamesMemoriesInformationApi(id).then(res => {
            let memories = res.data;
            console.log(memories)
            setMemories(memories);
        });
    }, [id]);


    const handleValue = (value) => {
        setValue(value)
    }

    const title = (
        <>
            <Title title={memories.title} />
            <SubTitle title={memories.description} />
        </>
    );

    const pag = (value) => {
        if (value === 1) {
            return <>{title}</>
        } else {
            return <DeleteMemories id={id} />
        }
    }

    const list = () => {
        return (
            <>
                <ListItemComponent valor={1} onClick={() => handleValue(1)} icon={<InfoIcon />} title={'Informação do Jogo'} />
                <ListItemComponent valor={2} onClick={() => handleValue(2)} icon={<DeleteIcon />} title={'Deletar Jogo'} />
            </>
        )
    }

    return (
        <Drawer title='Menu Memories' list={list()} body={pag(value)} />
    );
}
