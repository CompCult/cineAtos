import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import MissionsApi from './MissionsApi.js'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function Proposals() {

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
            const options = <Link to={"/missoes/id=" + obj._id}> Opções </Link>
            const missionsInformation = [obj.name, obj.points, options]
                return missionsInformation
        })
       
        return missionsInformation
    }

    const titleTable = (
        <div id='titleTable2'>
            list of mission Proposals
        </div>
    )
    
    const dataTable = {
        title : titleTable,
        columns : ["Name", "Pontos", "Opções"],
        data : missionsInformation()
    }

  return (
    <MyContext.Provider value={dataTable}>
        <Table/>
    </MyContext.Provider>
  );
}

export default Proposals