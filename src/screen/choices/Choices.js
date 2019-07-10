import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Choices() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    ChoicesApi.getChoicesApi()
      .then(res => {
        const choices = res.data
        setData(choices)
      })

  }, [])

  const choicesInformation = () => {
    const choicesInformation = data.map((obj) => {
      const choicesInformation = [obj.title, obj.description, obj.secret_code]
        return choicesInformation
    })

    return choicesInformation
  }

  const titleTable = (
    <div id='styleButtonTable'>
      <Link to="/escolhas/criar-quiz">
        <ButtomAdd title='Create quiz'/>
      </Link>
      <div id='titleTable'>
        list of Choices
      </div>
    </div>
  )

  const dataTable = {
    title : titleTable,
    columns : ["Titulo", "Descrição", "Código secreto"],
    data : choicesInformation()
  }

  return (
    <MyContext.Provider value={dataTable}>
      <Table/>
    </MyContext.Provider>
  )
}

export default Choices