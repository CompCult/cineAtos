import React, { useContext } from "react"
import Progress from './Progress'
import MyContext from './MyContext'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '90%',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

function Table() {
  const classes = useStyles();
  const value = useContext(MyContext)
  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15],
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

  if (value.request === false) {
    return <Progress />
  }

  return (
    <div className={classes.root}>
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
