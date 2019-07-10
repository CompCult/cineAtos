import React, { useEffect, useState } from 'react'
import EventsApi from './EventsApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Events() {

    const [data, setData] = useState([])

    useEffect(() => {
        EventsApi.getEventsApi()
        .then(res => {
          const events = res.data
          setData(events)
          console.log(events)
        })

    }, [])

    const transformData = (data) => {
        const day = data.slice(8,10)
        const month = data.slice(5,7)
        const year = data.slice(0,4)
        return day + '/' + month + '/' + year
    }
  
    const personInformation = () => {
      const personInformation = data.map((obj) => {
        const personInformation = [obj.name, obj.email]
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
      columns : ["Name", "Email"],
      data : personInformation()
    }
  
    return (
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    )
  }

export default Events