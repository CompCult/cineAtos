import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'

const ButtomAdd = (props) => {
    return (
        <Tooltip title={props.title}>
            <Fab size="small" color="inherit" aria-label="Add" id='buttonAddPerson' >
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export default ButtomAdd