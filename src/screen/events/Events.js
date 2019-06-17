import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/Table.js'
import ButtomAdd from '../../components/ButtomAdd.js'
import MyContext from '../../components/MyContext.js'

function Events() {

  const dataTable = {
        title : 
            <Fragment>
                <Link to="/eventos/criar-eventos">
                    <ButtomAdd title='Create Events'/>
                </Link>
                <div id='titleTable'>
                    list of events
                </div>
            </Fragment>
            ,
        columns : [
            {
            name: "Name",
            options: {
                filter: true,
                sort: true
            }
            },
            "Title",
            "Location",
            "Age",
            "Salary"
        ],

        data : [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"]
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

export default Events