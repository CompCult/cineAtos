import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useSnackbar } from '../../context/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import GridComponent from '../grid/GridComponent.component';
import { SnackBarStyled } from './Snackbar';

export default function PositionedSnackbar() {

    const { snackbar, setSnackbar } = useSnackbar();

    const handleClose = () => {
        setSnackbar({ ...snackbar, msg: '', type: '' });
    };

    return (
        <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={!!snackbar.msg}
            onClose={handleClose}
            message={snackbar.msg}
            key={snackbar.msg}
        >
            <SnackBarStyled backgroundColor={snackbar.type === 'error' ? '#FF0000' : '#01B158'}>
                <GridComponent justify="space-around" alignItems="baseline">
                    <div>{snackbar.msg}</div>
                    <div>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                </GridComponent>
            </SnackBarStyled>
        </Snackbar>
    );
}
