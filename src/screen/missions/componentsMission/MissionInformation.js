import React, { useState, useEffect } from 'react';
import MissionsApi from "../MissionsApi.js";
import DeleteMission from "./DeleteMission";
import EditMission from "./EditMission";
import StatusMission from "./StatusMission";
import { useParams } from "react-router";
import Drawer from '../../../components/Drawer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemComponent } from '../../../components/ListItemComponent';

export default function Information(props) {
    let { id } = useParams();
    const isMyMission = props.isMyMission;
    const [value, setValue] = useState(1);
    const [mission, setMissions] = useState({});

    useEffect(() => {
        MissionsApi.getMissionsInformationApi(id).then(res => {
            const missions = res.data;
            setMissions(missions);
        });
    }, [id]);

    const handleValue = (value) => {
        setValue(value)
    }

    const pag = (value) => {
        if (value === 1) {
            return <StatusMission id={id} status={"Pendente"} />
        } else if (value === 2) {
            return <StatusMission id={id} status={"Aprovado"} />
        } else if (value === 3) {
            return <StatusMission id={id} status={"Rejeitado"} />
        } else if (isMyMission && value === 4) {
            return <EditMission mission={mission} />
        } else if (isMyMission && value === 5) {
            return <DeleteMission id={id} />
        }
        return <></>

    }

    const list = () => {
        return (
            <>
                <ListItemComponent valor={1} onClick={() => handleValue(1)} icon={<SentimentSatisfiedIcon />} title={'Missões Pendentes'} />
                <ListItemComponent valor={2} onClick={() => handleValue(2)} icon={<SentimentSatisfiedAltIcon />} title={'Missões Aprovadas'} />
                <ListItemComponent valor={3} onClick={() => handleValue(3)} icon={<SentimentVeryDissatisfiedIcon />} title={'Missões Rejeitadas'} />
                <ListItemComponent valor={4} onClick={() => handleValue(4)} icon={<EditIcon />} title={'Editar a missão'} />
                <ListItemComponent valor={5} onClick={() => handleValue(5)} icon={<DeleteIcon />} title={'Deletar a missão'} />
            </>
        )
    }

    return (
        <Drawer title='Menu Missões' list={list()} body={pag(value)} />
    );
}
