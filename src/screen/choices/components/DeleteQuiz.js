import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function DeleteQuiz() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">{"Voçê deseja realmente excluir o quiz ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <p>Ao excluir o quiz, todas as informações contida</p>
                    <p>no quiz seram deletadas permanentemente</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Concordo</Button>
                <Button onClick={handleClose} color="primary" autoFocus>Discordo</Button>
            </DialogActions>
        </Dialog>
    );
}
