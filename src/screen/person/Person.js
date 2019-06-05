import React from 'react'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function Person() {

  const dataTable = {
        title : 'table test',
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
  
    <div>
         <MyContext.Provider value={dataTable}>
            <Table/>
         </MyContext.Provider>
    </div>
  );
}

export default Person