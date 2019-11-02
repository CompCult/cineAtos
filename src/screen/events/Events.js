import React, { useEffect, useState } from 'react'
import EventsApi from './EventsApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table'
import TransformData from '../../components/TransformData'
import { ButtomAdd } from '../../components/buttom/Buttom'
import MyContext from '../../components/MyContext'

function Events() {

  const [data, setData] = useState([])

  useEffect(() => {
    EventsApi.getEventsApi()
      .then(res => {
        const events = res.data
        setData(events)
      })

  }, [])

  const eventsInformation = () => {
    const eventsInformation = data.map((obj) => {
      const start_date = TransformData(obj.start_date)
      const end_date = TransformData(obj.end_date)
      const options = <Link to={"/missoes/trackId=" + obj._id}> Opções </Link>

      const eventsInformation = [obj._id, obj._user, obj.name, obj.place,
        start_date, end_date, options]
      return eventsInformation
    })

    return eventsInformation
  }

  const titleTable = (
    <div id='styleButtonTable'>
      <Link to="/eventos/criar-eventos">
        <ButtomAdd title='Create User' />
      </Link>
      <div id='titleTable'>
        List of people
        </div>
    </div>
  )

  const dataTable = {
    title: titleTable,
    columns: ["Identidade", "ID do Criador",
      "Nome", "Local", "Data de Início", "Data de Fim", "Descrição e Opções"],
    data: eventsInformation()
  }

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  )
}

export default Events