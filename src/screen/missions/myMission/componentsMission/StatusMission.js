import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MissionsApi from '../../MissionsApi'
import Table from '../../../../components/Table'
import MyContext from '../../../../components/MyContext'

function StatusMission({ status }) {

    const [data, setData] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {
        MissionsApi.getStatusMissionsApi(status)
            .then(res => {
                const missions = res.data
                setData(missions)
            }).finally(function () {
                setRequest(true)
            })

    }, [status])

    const missionsInformation = () => {
        const missionsInformation = data.map((obj) => {
            const options = <Link to={"/missoes/minhas-missoes/" + obj._id}> Opções </Link>
            const missionsInformation = [obj.name, obj.points, obj.secret_code, options]
            return missionsInformation
        })

        return missionsInformation
    }

    const titleTable = (
        <div id='styleButtonTable'>
            <div id='titleTable'>
                List of missions {status}
            </div>
        </div>
    )

    const dataTable = {
        title: titleTable,
        columns: ["Name", "Pontos", "Código Secreto", "Opções"],
        data: missionsInformation(),
        request: request
    }

    return (
        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    );
}

export default StatusMission