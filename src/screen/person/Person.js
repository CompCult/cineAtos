import React, { useEffect, useState } from 'react'
import PersonApi from './PersonApi.js'
import { Link } from 'react-router-dom'
import '../../components/Components.css'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Person() {

  const [data, setData] = useState([])
  const [request, setRequest] = useState(false)

  useEffect(() => {
    PersonApi.getPersonApi()
      .then(res => {
        const person = res.data
        setData(person)
      }).finally(function () {
        setRequest(true)
      })

  }, [])

  const personInformation = () => {
    const personInformation = data.map((obj) => {
      const options = <Link to={"/pessoas/trackId=" + obj._id}> Opções </Link>
      const personInformation = [obj.name, obj.email, options]
      return personInformation
    })

    return personInformation
  }

  const titleTable = (
    <div id='styleButtonTable'>
      <Link to="/pessoas/register">
        <ButtomAdd title='Create User' />
      </Link>
      <div id='titleTable'>
        list of people
      </div>
    </div>
  )

  const dataTable = {
    title: titleTable,
    columns: ["Name", "Email", "Opções"],
    data: personInformation(),
    request: request
  }

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  )
}

export default Person