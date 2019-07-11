import React, { useEffect, useState } from 'react'
import EventsApi from './EventsApi.js'
import Table from '../../components/Table.js'
import TransformData from '../../TransformData.js'
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
  
    const EventRequestsInformation = () => {
      const EventRequestsInformation = data.map((obj) => {
          const created_at = TransformData(obj.created_at)
          const updated_at = TransformData(obj.updated_at)

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