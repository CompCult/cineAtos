import React from "react";
import MUIDataTable from "mui-datatables"
import './Components.css'
export default class App extends React.Component {
  render() {
    const columns = [
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
    ];

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
      ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
      ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      rowsPerPage: 5,
      rowsPerPageOptions: [10, 15, 20],
      print: false,
      download: false,
      viewColumns: false,
      selectableRows: false,
      filter: false,
      textLabels: {
        body: {
          noMatch: "Sorry, no matching records found",
          toolTip: "Sort"
        },
        pagination: {
          next: "Next Page",
          previous: "Previous Page",
          rowsPerPage: "Rows per page:",
          displayRows: "of"
        },
        filter: {
          all: "All",
          title: "FILTERS",
          reset: "RESET"
        },
        viewColumns: {
          title: "Show Columns",
          titleAria: "Show/Hide Table Columns"
        }
      }
    };

    return (
      <div className='tableComponent'>
        <MUIDataTable
          title={"Tabela Test"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}
