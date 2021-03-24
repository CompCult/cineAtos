import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Grid from '../grid/GridComponent.component';

interface Props {
    open: boolean;
}

export default function Progress({ open }: Props) {

    return (
        <Grid justify="center" alignItems="center">
            <div style={{ height: 40 }}>
                <Fade in={open} unmountOnExit >
                    <CircularProgress color="secondary" />
                </Fade>
            </div>
        </Grid>
    );
}
