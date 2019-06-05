import React, { useContext } from "react";
import MUIDataTable from "mui-datatables"
import './Components.css'
import MyContext from "./MyContext";

function Table() {

  const value = useContext(MyContext)

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
        title={value.title}
        data={value.data}
        columns={value.columns}
        options={options}
      />
    </div>
  );
}

export default Table
