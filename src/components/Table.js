import React, { useContext } from "react"
import Progress from './Progress'
import MyContext from './MyContext'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { recordInfo, recordInfo2, getInfo } from "../screen/Auth"
import { useHistory } from "react-router-dom"

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
  let history = useHistory()
  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    rowsPerPage: 8,
    rowsPerPageOptions: [5, 10, 15],
    print: false,
    download: true,
    viewColumns: true,
    selectableRows: false,
    filter: true,
    onRowClick: (rowData) => {
      let result = rowData[rowData.length - 1].props.to.split("/")
      recordInfo(JSON.stringify(result[result.length - 1]))
      if (value.severalId === true) {
        recordInfo2(JSON.stringify(result[result.length - 3]))
      }
      console.log(JSON.parse(getInfo()));
      history.replace(value.link + JSON.parse(getInfo()))
    },
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
