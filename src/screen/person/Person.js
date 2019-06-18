import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../components/Components.css'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'
import PersonApi from './PersonApi.js'

function Person() {

  const [data, setData] = useState(null)

  useEffect(() => {
    console.log('use')
    PersonApi.getPersonApi()
    .then(res => {
      const person = res.data;

      const da = person.map((obj) => {
        const o = {
          name : obj.name,
          email :obj.email
        }
   
        return o

      }) 
      console.log(person)
      console.log(da)
      setData(da)
    })
  }, [])
  
  const dataTable = {
        title :
        <div id='styleButtonTable'>
          <Link to="/pessoas/register">
            <ButtomAdd title='Create User'/>
          </Link>
          <div id='titleTable'>
            list of people
          </div>
        </div>
          ,
        columns : [
            {
            name: "Name",
            options: {
                filter: true,
                sort: true
            }
            },
            "Email"
        ],

        data : [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
            ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
            ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
            ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
            ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
        ]
  }


  return (
    <Fragment>
      <MyContext.Provider value={dataTable}>
        <Table/>
      </MyContext.Provider>
    </Fragment>
  );
}

export default Person