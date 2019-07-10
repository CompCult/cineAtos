import React, { useEffect, useState } from 'react'
import EventsApi from './EventsApi.js'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function EventRequests() {

    const [data, setData] = useState([])

    useEffect(() => {
        EventsApi.getEventsRequestsApi()
        .then(res => {
          const events = res.data
          setData(events)
        })

    }, [])

    const transformData = (data) => {
        const day = data.slice(8,10)
        const month = data.slice(5,7)
        const year = data.slice(0,4)
        return day + '/' + month + '/' + year
    }
  
    const EventRequestsInformation = () => {
      const EventRequestsInformation = data.map((obj) => {
          const created_at = transformData(obj.created_at)
          const updated_at = transformData(obj.updated_at)

        const EventRequestsInformation = [obj._user.name, obj._appointment.name,
              created_at, updated_at, obj.status]
          return EventRequestsInformation
      })
  
      return EventRequestsInformation
    }
  
    const titleTable = (
        <div id='titleTable2'>
            list of Event Requests
        </div>
    )
  
    const dataTable = {
      title : titleTable,
      columns : ["Solicitante", "Evento", "Solicitação", "Modificação", "Status"],
      data : EventRequestsInformation()
    }
  
    return (
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    )
  }

export default EventRequests