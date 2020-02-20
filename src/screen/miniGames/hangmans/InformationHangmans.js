import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import DeleteHangmans from "./DeleteHangmans";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Title, SubTitle } from "../../../components/Title";
import { useParams } from "react-router";
import Drawer from '../../../components/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

export default function InformationHangmans() {

    let { id } = useParams();
    const [value, setValue] = useState(1);
    const [hangmans, setHangmans] = useState({});

    useEffect(() => {
        MiniGamesApi.getMiniGamesHangmansInformationApi(id).then(res => {
            let hangmans = res.data;
            setHangmans(hangmans);
        });
    }, [id]);

    const handleValue = (value) => {
        setValue(value)
    }

    const title = (
        <>
            <Title title={hangmans.title} />
            <SubTitle title={hangmans.description} />
        </>
    );

    const pag = (value) => {
        if (value === 1) {
            return <>{title}</>
        } else {
            return <DeleteHangmans id={id} />
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