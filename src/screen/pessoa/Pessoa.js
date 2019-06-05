import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from './../../components/Table.js'

const useStyles = makeStyles(theme => ({
 
}))

function Pessoa() {
  const classes = useStyles()
  const [anchorElEscolhas, setAnchorElEscolhas] = useState(null)

  function handleProfileMenuOpenEscolhas(event) {
    setAnchorElEscolhas(event.currentTarget)
  }

  function handleMenuCloseEscolhas() {
    setAnchorElEscolhas(null)
  }

  return (
  
    <div>
      <Table/>
    </div>
  );
}

export default Pessoa