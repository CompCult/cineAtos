import React, { useEffect, useState, Fragment } from "react";
import MiniGamesApi from "../MiniGamesApi";
import DeleteMemories from "./DeleteMemories";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Title, SubTitle } from "../../../components/Title";
import { useParams } from "react-router";
import Drawer from '../../../components/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

export default function InformationMemories() {
    let { id } = useParams();
    const [value, setValue] = useState(1);
    const [memories, setMemories] = useState({});

    useEffect(() => {
        MiniGamesApi.getMiniGamesMemoriesInformationApi(id).then(res => {
            let memories = res.data;
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
            <List>
                <ListItem button key={1} onClick={() => handleValue(1)}>
                    <ListItemIcon>{<InfoIcon />}</ListItemIcon>
                    <ListItemText primary={'Informação do Jogo'} />
                </ListItem>

                <ListItem button key={2} onClick={() => handleValue(2)}>
                    <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
                    <ListItemText primary={'Deletar Jogo'} />
                </ListItem>
            </List>
        )
    }

    return (
        <Drawer title='Menu Memories' list={list()} body={pag(value)} />
    );
}
