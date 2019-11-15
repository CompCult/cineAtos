import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MissionsApi from '../MissionsApi'
import Table from '../../../components/Table'
import { ButtomAdd } from '../../../components/buttom/Buttom'
import MyContext from '../../../components/MyContext'

function AllMissions() {

    const [data, setData] = useState([])
    const [request, setRequest] = useState(false)
    useEffect(() => {
        MissionsApi.getAllMissionsApi()
            .then(res => {
                const missions = res.data
                setData(missions)
            }).finally(function () {
                setRequest(true)
            })

    }, [])

    const missionsInformation = () => {
        const missionsInformation = data.map((obj) => {
            const options = <Link to={"/missoes/todas-missoes/" + obj._id}> Opções </Link>
            const missionsInformation = [obj.name, obj.points, obj.secret_code, options]
            return missionsInformation
        })

        return missionsInformation
    }

    const titleTable = (
        <div id='styleButtonTable'>
            <Link to="/missoes/criar-missoes">
                <ButtomAdd title='Create Missions' />
            </Link>
            <div id='titleTable'>
                List of missions
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

export default AllMissions