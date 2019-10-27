import React, { useEffect, useState } from 'react'
import ChoicesApi from '../ChoicesApi.js'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table.js'
import MyContext from '../../../components/MyContext.js'

function SeeAnswer({ id }) {
    const [choiceAnswers, setChoiceAnswers] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        ChoicesApi.getChoicesInformationAnswersApi(id)
            .then(res => {
                const choiceAnswers = res.data
                setChoiceAnswers(choiceAnswers)
            }).finally(function () {
                setRequest(true)
            })

    }, [id])

    const choicesInformation = () => {
        const choicesInformation = choiceAnswers.map((obj) => {
            const options = <Link to={"/escolhas/respostas-das-escolhas/trackId=" + obj._id}> Opções </Link>
            const choicesInformation = [obj._user.name, obj._quiz.title, options]
            return choicesInformation
        })

        return choicesInformation
    }

    const titleTable = (
        <div id='titleTable2'>
            List of Choices Answers
        </div>
    )

    const dataTable = {
        title: titleTable,
        columns: ["Usuario", "Titulo do Quiz", "Opções"],
        data: choicesInformation(),
        request: request
    }

    return (
        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    );
}

export default SeeAnswer