import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi'
import { Link } from 'react-router-dom'
import Table from '../../components/Table'
import { ButtomAdd } from '../../components/buttom/Buttom'
import MyContext from '../../components/MyContext'

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
        Lista de quizzes
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