import React, { Fragment } from 'react'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom'
import '../../App.css'

function Person() {
  const dataTable = {
        title :
        <Fragment>
          <Link to="/pessoas/register">
            <Fab size="small" color="inherit" aria-label="Add" id='buttonAddPerson' >
              <AddIcon />
            </Fab>
          </Link>
          <div id='titleTable'>
            person
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