import React, { useEffect, useState }  from 'react'
import MissionsApi from './MissionsApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

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
            const missionsInformation = [obj.name, obj.points, obj.secret_code]
                return missionsInformation
        })

        return missionsInformation
    }


    const titleTable = (
        <div id='styleButtonTable'>
           <Link to="/missoes/criar-missoes">
                <ButtomAdd title='Create Missions'/>
            </Link>
            <div id='titleTable'>
                list of missions
            </div>
        </div>
      )
    
      const dataTable = {
        title : titleTable,
        columns : ["Name", "Pontos", "Código Secreto"],
        data : missionsInformation()
    }

  return (
  
    <MyContext.Provider value={dataTable}>
        <Table/>
    </MyContext.Provider>
  );
}

export default Missions