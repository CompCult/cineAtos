import React, { useEffect, useState } from 'react'
import PersonApi from './PersonApi.js'
import { Link } from 'react-router-dom'
import '../../components/Components.css'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Person() {

  const [data, setData] = useState([])

  useEffect(() => {
      PersonApi.getPersonApi()
      .then(res => {
        const person = res.data
        setData(person)
      })

  }, [])

  const personInformation = () => {
    const personInformation = data.map((obj) => {
      const personInformation = [obj.name, obj.email]
        return personInformation
    })

    return personInformation
  }

  const titleTable = (
    <div id='styleButtonTable'>
      <Link to="/pessoas/register">
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

export default Person