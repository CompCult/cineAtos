import React, { Fragment } from 'react';
import AddIcon from '@material-ui/icons/Add'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Feedback from '@material-ui/icons/Feedback'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        float: 'left'
    },
}));

export default function MenuSlide() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked)
    };

    return (
        <Fragment>
            <Tooltip title={'Opções'}>
                <Fab onClick={handleChange} color="secondary" aria-label="Add" className={classes.root}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                <div>
                    <Tooltip title={'feedback'}>
                        <Fab color="secondary" aria-label="feedback" size={'small'} className={classes.root}>
                            <Feedback />
                        </Fab>
                    </Tooltip>

                    <Tooltip title={'edit'}>
                        <Fab color="secondary" aria-label="edit" size={'small'} className={classes.root}>
                            <EditIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title={'delete'}>
                        <Fab color="secondary" aria-label="delete" size={'small'} className={classes.root}>
                            <DeleteIcon />
                        </Fab>
                    </Tooltip>
                </div>
            </Slide>
        </Fragment>
    );
}
