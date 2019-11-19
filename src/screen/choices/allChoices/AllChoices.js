import React, { useEffect, useState } from 'react'
import ChoicesApi from '../ChoicesApi'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table'
import MyContext from '../../../components/MyContext'

function AllChoices() {

    const [data, setData] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {
        ChoicesApi.getAllChoicesApi()
            .then(res => {
                const choices = res.data
                setData(choices)
            }).finally(function () {
                setRequest(true)
            })

    }, [data.length])

    const choicesInformation = () => {
        const choicesInformation = data.map((obj) => {
            const options = <Link to={"/quiz/todos-quizes/" + obj._id}> Opções </Link>
            const choicesInformation = [obj.title, obj.description, obj.secret_code, options]
            return choicesInformation
        })

        return choicesInformation
    }

    const titleTable = (
        <div id='styleButtonTable'>
            <div id='titleTable'>
                Todos os quizzes
            </div>
        </div>
    )

    const dataTable = {
        title: titleTable,
        columns: ["Titulo", "Descrição", "Código secreto", "Opções"],
        data: choicesInformation(),
        request: request
    }

    return (
        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    )
}

export default AllChoices