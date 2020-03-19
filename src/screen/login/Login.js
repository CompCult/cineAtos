import React, { useState } from "react";
import LoginApi from "./LoginApi.js";
import logo from "../../../src/images/images.png";
import { makeStyles } from "@material-ui/core/styles";
import { login, id, gestor, permissaoProfessor } from "../../services/Auth";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";
import Form from './Form';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  marginButton: {
    width: "100%",
    maxWidth: 620,
  },
  logo: {
    width: "70%",
    height: "70%",
    maxWidth: 400,
    maxHeight: 400
  }
}));

function Login() {
  const classes = useStyles();
  let history = useHistory();
  const [values] = useState({ email: "", password: "" });

  const toSetUpAuth = (data) => {
    if (data.type === 'gestor') {
      gestor(true)
    } else if (data.type === 'estudante' || data.type === 'usuarioComum') {
      toast.error("Você não possui acesso ao site.")
      return null;
    } 
     else {
      permissaoProfessor(data.can_edit)
    }
    login(data.token);
    id(data._id);
  }

  const handleSubmit = async event => {
    await LoginApi.postLoginApi(event).then(res => {
      toSetUpAuth(res.data)
      history.push("/")
    }).catch(error => {
      toast.error("Email ou senha incorretas");
    })
  };

  return (
    <div className={classes.root}>

      <Card style={{ textAlign: 'center' }}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Form className={classes.marginButton} handleSubmit={handleSubmit} initialValues={values} />

      </Card>
    </div>
  );
}

export default Login;