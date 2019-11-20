import React, { useEffect, useState } from 'react'
import PersonApi from './PersonApi'
import { Link } from 'react-router-dom'
import Table from '../../components/Table'
import { ButtomAdd } from '../../components/buttom/Buttom'
import MyContext from '../../components/MyContext'

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

  }, [data.length])

  console.log(data.length)

  const personInformation = () => {
    const personInformation = data.map((obj) => {
      const options = <Link to={"/pessoas/trackId=" + obj._id}> Opções </Link>
      const personInformation = [obj.name, obj.email, options]
      return personInformation
    })

    return personInformation
  }

  const titleTable = (
    ////retirar esse id para arrumara a tabela
    <div id='styleButtonTable'>
      <Link to="/pessoas/register">
        <ButtomAdd title='Create User' />
      </Link>
      <div id='titleTable'>
        Lista de pessoas
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