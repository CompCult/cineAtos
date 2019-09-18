import React, { useEffect, useState } from 'react'
import PanelsApi from './PanelsApi.js'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function Panels() {

  const [data, setData] = useState([])

  useEffect(() => {
    PanelsApi.getChoicesOfAnswersApi()
      .then(res => {
        const choices = res.data
        setData(choices)
      })

  }, [])

  const choicesInformation = () => {
    const choicesInformation = data.map((obj) => {
      const choicesInformation = [obj._user.name, obj._quiz.title]
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
    title: titleTable,
    columns: ["Usuario", "Titulo do Quiz"],
    data: choicesInformation()
  }

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  )
}

export default Panels