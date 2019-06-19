import React, { Fragment, useEffect, useState } from 'react'
import PersonApi from './PersonApi.js'
import { Link } from 'react-router-dom'
import '../../components/Components.css'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Person() {

  const [datas, setDatas] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      PersonApi.getPersonApi()
      .then(res => {
        const person = res.data
        setDatas(person)
        const personInformation = person.map((obj) => {
          const personInformation = [obj.name, obj.email]
          //personInformation.push(obj.name)
          //personInformation.push(obj.email)
          return personInformation
        })
        setData(personInformation)
      })

  }, [])


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

  const columnsTable = (
    [
      {
      name: "Name",
      options: {
          filter: true,
          sort: true
        }
      },
      "Email"
    ]
  )
  
  const dataTable = {
    title : titleTable,
    columns : columnsTable,
    data : data
  }

  return (
    <Fragment>
      {console.log(datas)}
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    </Fragment>
  );
}

export default Person