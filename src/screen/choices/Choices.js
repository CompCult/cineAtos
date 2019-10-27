import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Choices() {

  const [data, setData] = useState([])
  const [request, setRequest] = useState(false)

  useEffect(() => {
    ChoicesApi.getChoicesApi()
      .then(res => {
        const choices = res.data
        setData(choices)
      }).finally(function () {
        setRequest(true)
      })

  }, [])

  const choicesInformation = () => {
    const choicesInformation = data.map((obj) => {
      const options = <Link to={"/quiz/trackId=" + obj._id + "/quiz"}> Opções </Link>
      const choicesInformation = [obj.title, obj.description, obj.secret_code, options]
      return choicesInformation
    })

    return choicesInformation
  }

  const titleTable = (
    <div id='styleButtonTable'>
      <Link to="/quiz/criar-quiz">
        <ButtomAdd title='Create quiz' />
      </Link>
      <div id='titleTable'>
        List of Choices
      </div>
    </div>
  )

  const dataTable = {
    title: titleTable,
    columns: ["Titulo", "Descrição", "Código secreto", "Opções"],
    data: choicesInformation(),
    request: request
  }

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  )
}

export default Choices