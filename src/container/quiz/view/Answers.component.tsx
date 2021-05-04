import React, { useState, useEffect } from 'react';
import { Table } from '../../../component/Component';
import { HEAD_CELL_ANSWERS } from '../utils/HEAD_CELL';
import { getQuizzesAnswers } from '../Quizzes.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { Progress } from "../../../component/Component";
import { ACTION } from '../../../component/table/interfaces/TableInterface';

export default function QuizzesComponent() {

    let { id } = useParams<ParamTypes>();
    const [quizzes, setQuizzes] = useState<Array<any>>([]);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getQuizzesAnswers(id).then(res => {
            if (res.data) {
                setQuizzes(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [id]);

    const headCell = () => {
        if (HEAD_CELL_ANSWERS[HEAD_CELL_ANSWERS.length - 1].id === ACTION) {
            HEAD_CELL_ANSWERS.pop();
        }
        return HEAD_CELL_ANSWERS;
    }

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Table
            data={quizzes}
            headCells={headCell()}
        />
    );
}
