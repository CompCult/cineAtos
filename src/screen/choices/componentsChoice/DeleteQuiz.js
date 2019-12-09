import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ChoicesApi from '../ChoicesApi.js'
import { useHistory } from "react-router-dom"

export default function DeleteQuiz({ id }) {
    const [open, setOpen] = useState(true);
    let history = useHistory()
    const handleClose = () => {
        setOpen(false);
    }

    const deleteQuiz = () => {
        ChoicesApi.deleteChoicesApi(id)
            .then(res => {
                console.log(res)
            })
        handleClose()
        history.replace("/quiz/meus-quizes")
    }

    return (
        <Dialog open={open} maxWidth="xs" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">{"Voçê deseja realmente excluir o quiz ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ao excluir o quiz, todas as informações contida no quiz seram deletadas permanentemente
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Discordo</Button>
                <Button onClick={deleteQuiz} color="primary">Concordo</Button>
            </DialogActions>
        </Dialog>
    );
}
