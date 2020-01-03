import React, { useState } from "react";
import clsx from "clsx";
import LoginApi from "./LoginApi.js";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import logo from "../../../src/images/images.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { login, id } from "../../services/Auth";
import { useHistory } from "react-router-dom";
import InvalidLogin from "./InvalidLogin";
import Progress from "../../components/Progress";
import {
  renderTextFieldLogin,
  renderTextFieldPassword
} from "../../components/form/Form";

const validate = values => {
  const errors = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Campo não pode ser vazio";
    }
  });

  return errors;
};

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  margin: {
    width: "80%",
    maxWidth: 500
  },
  marginButton: {
    width: "80%",
    maxWidth: 500,
    marginTop: "1%"
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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [request, setRequest] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const postLoginUser = async event => {
    event.preventDefault();
    setRequest(true);
    setError(false);
    await LoginApi.postLoginApi(values)
      .then(res => {
        login(res.data.token);
        id(res.data._id);
        setRequest(false);
        setTimeout(() => history.replace("/pessoas"), 10);
      })
      .catch(error => {
        setError(true);
        setRequest(false);
      });
  };

  if (request) {
    return <Progress />;
  }

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />

      <form onSubmit={postLoginUser}>
        {error && <InvalidLogin />}
        <Field
          className={classes.margin}
          onChange={handleChange("email")}
          name="email"
          component={renderTextFieldLogin}
          label="Name ou Email"
        />
        <div></div>
        <Field
          onChange={handleChange("password")}
          name="password"
          component={renderTextFieldPassword}
          className={clsx(classes.margin, classes.textField)}
          type={showPassword ? "text" : "password"}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          conditional={showPassword ? <VisibilityOff /> : <Visibility />}
        />
        <div></div>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          className={classes.marginButton}
        >
          {" "}
          Login{" "}
        </Button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "MaterialUiFormLogin", // a unique identifier for this form
  validate
})(Login);
