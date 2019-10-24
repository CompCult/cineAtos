import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Feedback from '@material-ui/icons/Feedback'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
    },
    position: {
        float: 'left',
        position: 'absolute',
    }
}));

export default function MenuSlide() {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start" className={classes.position} >
            <div>
                <Fab color="secondary" aria-label="feedback" size={'small'} className={classes.root} id='button'>
                    <Feedback />
                </Fab>
                Ver Respostas
            </div>

            <div>
                <Fab color="secondary" aria-label="edit" size={'small'} className={classes.root} id='button'>
                    <EditIcon />
                </Fab>
                Editar
            </div>
            <div>
                <Fab color="secondary" aria-label="delete" size={'small'} className={classes.root} id='button'>
                    <DeleteIcon />
                </Fab>
                Deletar
            </div>

        </Grid>
    );
}
