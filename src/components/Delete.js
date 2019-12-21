import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Delete({ name, onClick }) {

  return (
    <Fragment>
      <DialogTitle id="alert-dialog-title">
        {"Deseja realmente excluir " + name + " ?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Todas as informações pertecentes a {name} seram deletadas
          permanentemente ao clicar no botão Concordo!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick} variant="contained" color="primary">
          Concordo
        </Button>
      </DialogActions>
    </Fragment>
  );
}
