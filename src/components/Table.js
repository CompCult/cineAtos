import React, { useContext } from "react"
import Progress from './Progress'
import MyContext from './MyContext'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2% auto 2% auto',
    borderRadius: 12
  },
  table: {
    padding: '0px 40px 0px 40px',
    borderRadius: 12,
    [theme.breakpoints.down('sm')]: {
      padding: '0px 4px 0px 4px',
    },
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
    rowsPerPageOptions: [5, 8, 10, 15],
    print: false,
    download: true,
    viewColumns: false,
    selectableRows: false,
    filter: false,
    onRowClick: (rowData) => {
      if (value.noClick) {
        return
      }

      let result = rowData[rowData.length - 1].props.to.split("/")
      /*
      console.log(result[result.length - 1])
      recordInfo(JSON.stringify(result[result.length - 1]))
      if (value.severalId) {
        recordInfo2(JSON.stringify(result[result.length - 3]))
      }
      console.log(JSON.parse(getInfo()));
      console.log(JSON.parse(getInfo2()));
      */
      history.replace(value.link + result[result.length - 1])
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

  if (!value.request) {
    return <Progress />
  }

  return (
    <div className={classes.root}>
      <MUIDataTable
        title={value.title}
        data={value.data}
        columns={value.columns}
        options={options}
        className={classes.table}
      />
    </div>
  );
}

export default Table
