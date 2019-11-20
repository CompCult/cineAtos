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
    rowsPerPage: 8,
    rowsPerPageOptions: [5, 10, 15],
    print: false,
    download: false,
    viewColumns: false,
    selectableRows: false,
    filter: false,

    textLabels: {
      body: {
        noMatch: "Desculpe, nenhum registro correspondente encontrado",
        toolTip: "Sort"
      },
      pagination: {
        next: "Proxima pagina",
        previous: "pagina anterior",
        rowsPerPage: "Linhas por pagina:",
        displayRows: "de"
      },
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
