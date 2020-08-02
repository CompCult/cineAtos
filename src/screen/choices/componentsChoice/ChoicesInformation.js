import React, { useState, useEffect } from 'react';
import ChoicesApi from "../ChoicesApi.js";
import SeeAnswer from "./SeeAnswer";
import EditQuiz from "../myChoices/EditQuiz";
import DeleteQuiz from "./DeleteQuiz";
import Charts from "./Charts";
import { useParams } from "react-router";
import { ListItemComponent } from '../../../components/ListItemComponent';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Drawer from '../../../components/Drawer';

export default function Information(props) {
    let { id } = useParams();
    const isMyChoice = props.isMyChoice;
    const [value, setValue] = useState(1);
    const [choices, setChoices] = useState({});

    useEffect(() => {
        ChoicesApi.getChoicesInformationApi(id).then(res => {
            const choice = res.data;
            setChoices(choice);
        });
    }, [id]);

    const handleValue = (value) => {
        setValue(value)
    }

    const pag = (value) => {
        if (value === 1) {
            return <Charts id={id} nameQuiz={choices.title} />
        } else if (value === 2) {
            return <SeeAnswer id={id} titleChoices={choices.title} />
        } else if (isMyChoice && value === 3) {
            return <EditQuiz quiz={choices} />
        } else if (isMyChoice && value === 4) {
            return <DeleteQuiz id={id} />
        }
        return <></>
    }

    const list = () => {
        return (
            <>
                <ListItemComponent valor={1} onClick={() => handleValue(1)} icon={<InsertChartIcon />} title={'Ver o Gráfico'} />
                <ListItemComponent valor={2} onClick={() => handleValue(2)} icon={<FeedbackIcon />} title={'Ver Resposta'} />
                <ListItemComponent valor={3} onClick={() => handleValue(3)} icon={<EditIcon />} title={'Editar o Quiz'} />
                <ListItemComponent valor={4} onClick={() => handleValue(4)} icon={<DeleteIcon />} title={'Deletar  o Quiz'} />
            </>
        )
    }

    return (
        <Drawer title='Menu Quizes' list={list()} body={pag(value)} />
    );
}