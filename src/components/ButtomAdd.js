import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'

const ButtomAdd = ({ title }) => {
    return (
        <Tooltip title={title}>
            <Fab size="small" color="inherit" aria-label="Add" id='button' >
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export default ButtomAdd