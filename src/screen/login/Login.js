import React, { useState } from "react";
import LoginApi from "./LoginApi.js";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import logo from "../../../src/images/images.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { login, id, gestor } from "../../services/Auth";
import { useHistory } from "react-router-dom";
import { RenderTextField } from "../../components/form/Form";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

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
    width: '50%',
    marginTop: '2%',
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
  const [showPassword, setShowPassword] = useState(false);
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

  const toSetUpAuth = (data) => {
    if (data.type === 'gestor') {
      gestor(true)
    }
    login(data.token);
    id(data._id);
  }

  const postLoginUser = async event => {
    event.preventDefault();
    setRequest(true);
    await LoginApi.postLoginApi(values).then(res => {
      toSetUpAuth(res.data)
      history.push("/")
    }).catch(error => {
      toast.error("Email ou senha incorretas");
      setRequest(false);
    })
  };

  return (
    <div className={classes.root}>

      <Card style={{ textAlign: 'center' }}>
        <img src={logo} className={classes.logo} alt="logo" />

        <form onSubmit={postLoginUser} className='form'>
          <Field onChange={handleChange("email")}
            name="email"
            component={RenderTextField}
            label="Name ou Email" />
          <div>
            <Field onChange={handleChange("password")}
              name="password"
              label="Password"
              component={RenderTextField}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword} >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classes.marginButton} disabled={!request ? false : true}>
            {!request ? 'Login' : 'Carregando...'}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default reduxForm({
  form: "MaterialUiFormLogin", // a unique identifier for this form
  validate
})(Login);
