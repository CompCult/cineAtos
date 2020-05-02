import React, { useEffect, useState } from "react";
import MiniGamesApi from "../MiniGamesApi";
import DeleteHangmans from "./DeleteHangmans";
import { Title } from "../../../components/Title";
import { useParams } from "react-router";
import Drawer from '../../../components/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemComponent } from '../../../components/ListItemComponent';

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
            <Title title={hangmans.title} fontSize={40} />
            <Title title={hangmans.description} fontSize={30} />
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