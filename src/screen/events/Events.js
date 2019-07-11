import React, { useEffect, useState } from 'react'
import EventsApi from './EventsApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import TransformData from '../../TransformData.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Events() {

    const [data, setData] = useState([])

    useEffect(() => {
        EventsApi.getEventsApi()
        .then(res => {
          const events = res.data
          setData(events)
        })

    }, [])
  
    const personInformation = () => {
      const personInformation = data.map((obj) => {
        const start_date = TransformData(obj.start_date)
        const end_date = TransformData(obj.end_date)
        const personInformation = [obj._id, obj._user, obj.name, obj.place,
        start_date, end_date]
          return personInformation
      })
  
      return personInformation
    }
  
    const titleTable = (
      <div id='styleButtonTable'>
        <Link to="/eventos/criar-eventos">
          <ButtomAdd title='Create User'/>
        </Link>
        <div id='titleTable'>
          list of people
        </div>
      </div>
    )
  
    const dataTable = {
      title : titleTable,
      columns : ["Identidade", "ID do Criador",
       "Nome", "Local", "Data de Início", "Data de Fim"],
      data : personInformation()
    }
  
    return (
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    )
  }

export default Events