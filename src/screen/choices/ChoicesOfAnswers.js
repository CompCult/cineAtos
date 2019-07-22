import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChoicesApi from './ChoicesApi.js'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function ChoicesOfAnswers() {

    const [data, setData] = useState([])

    useEffect(() => {
      ChoicesApi.getChoicesOfAnswersApi()
        .then(res => {
          const choices = res.data
          setData(choices)
        })

    }, [])
  
    const choicesInformation = () => {
      const choicesInformation = data.map((obj) => {
        const options = <Link to={"/escolhas/respostas-das-escolhas/id=" + obj._id}> Opções </Link>
        const choicesInformation = [obj._user.name, obj._quiz.title, options]
          return choicesInformation
      })
  
      return choicesInformation
    }
  
    const titleTable = (
        <div id='titleTable2'>
            list of Choices Answers
        </div>
    )
  
    const dataTable = {
      title : titleTable,
      columns : ["Usuario", "Titulo do Quiz", "Opções"],
      data : choicesInformation()
    }
  
    return (
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    )
  }

export default ChoicesOfAnswers