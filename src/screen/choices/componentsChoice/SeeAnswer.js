import React, { useEffect, useState } from 'react'
import ChoicesApi from '../ChoicesApi.js'
import Table from '../../../components/Table.js'
import MyContext from '../../../components/MyContext.js'

function SeeAnswer({ id, titleChoices }) {
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
 

    console.log(choiceAnswers)
    const choicesInformation = () => {
        const choicesInformation = choiceAnswers.map((obj) => {
            let status = obj.approved ? 'aprovado' : 'reprovado'
            const choicesInformation = [obj._user.name, obj._quiz.title, obj.answer, status ]
            return choicesInformation
        })

        return choicesInformation
    }

    const titleTable = (
        <div id='titleTable2'>
            Lista de respostas do quiz {titleChoices}
        </div>
    )

    const dataTable = {
        title: titleTable,
        columns: ["Usuario", "Titulo do quiz", "Opção marcada", 'Opção correta'],
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