import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PersonApi from '../PersonApi.js'
import { useHistory } from "react-router-dom"

export default function DeletePerson({ id }) {
    const [open, setOpen] = useState(true);
    let history = useHistory()
    const handleClose = () => {
        setOpen(false);
    }

    const deletePerson = () => {
        PersonApi.deletePersonApi(id)
            .then(res => {
                console.log(res)
            })
        handleClose()
        history.replace("/pessoas")
    }

    return (
        <Dialog open={open} maxWidth="xs" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">{"Voçê deseja realmente excluir esse usuário ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ao excluir esse usuário, todas as informações contida desse usuário seram deletadas permanentemente
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Discordo</Button>
                <Button onClick={deletePerson} color="primary">Concordo</Button>
            </DialogActions>
        </Dialog>
    );
}
