import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MissionsApi from './MissionsApi'
import Table from '../../components/Table'
import { ButtomAdd } from '../../components/buttom/Buttom'
import MyContext from '../../components/MyContext'

function Missions() {

    const [data, setData] = useState([])

    useEffect(() => {
        MissionsApi.getMissionsApi()
            .then(res => {
                const missions = res.data
                setData(missions)
            })

    }, [])

    const missionsInformation = () => {
        const missionsInformation = data.map((obj) => {
            const options = <Link to={"/missoes/trackId=" + obj._id}> Opções </Link>
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
        data: missionsInformation()
    }

    return (

        <MyContext.Provider value={dataTable}>
            <Table />
        </MyContext.Provider>
    );
}

export default Missions