import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MissionsApi from './MissionsApi.js'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function MissionResponses() {

    const [data, setData] = useState([])

    useEffect(() => {
        MissionsApi.getMissionsAnswersApi()
            .then(res => {
                const missionsAnswers = res.data
                setData(missionsAnswers)
            })

    }, [])

    const missionsAnswersInformation = () => {
        const missionsAnswers = data.filter(obj => obj._mission != null)

        const missionsAnswersInformation = missionsAnswers.map((obj) => {
            const options = <Link to={"/missoes/trackId=" + obj._id}> Opções </Link>
            const missionsAnswersInformation = [obj._user.name, obj._mission.name, options]
            return missionsAnswersInformation
        })

        return missionsAnswersInformation
    }

    const titleTable = (
        <div id='titleTable2'>
            list of mission responses
        </div>
    )

    const dataTable = {
        title: titleTable,
        columns: ["Usuario", "Missão", "Opções"],
        data: missionsAnswersInformation()
    }

    return (
        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    );
}

export default MissionResponses