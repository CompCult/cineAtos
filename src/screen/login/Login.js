import React, { useState } from 'react'
import clsx from 'clsx'
import LoginApi from './LoginApi.js'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import logo from '../../../src/images/logo.png'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { login } from "../../services/Auth"
import { useHistory } from "react-router-dom"
import InvalidLogin from './InvalidLogin'

var buttonSubmitValidate = false

const validate = values => {
    const errors = {}
    const requiredFields = ['email', 'password']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
    return errors
}

const renderTextField = ({ className, label, input, meta: { touched, invalid, error }, ...custom }) => (
    <FormControl fullWidth className={className}>
        <TextField
            label={label}
            margin="normal"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            error={touched && invalid}
            helperText={touched && error}
            {...input} {...custom} />
    </FormControl>
)

const renderTextFieldPassword = ({ className, onClick, onMouseDown, conditional, type, input, meta: { touched, invalid, error }, ...custom }) => (
    <FormControl fullWidth className={className}>

        <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={type}
            label="Password"
            error={touched && invalid}
            helperText={touched && error}
            {...input} {...custom}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton edge="end" aria-label="toggle password visibility" onClick={onClick} onMouseDown={onMouseDown}>
                            {conditional}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    </FormControl>
)

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
    },
    margin: {
        width: '80%',
        maxWidth: 500,
    },
    marginButton: {
        width: '80%',
        maxWidth: 500,
        marginTop: '1%'
    },
    logo: {
        width: '70%',
        height: '70%',
        maxWidth: 400,
        maxHeight: 400
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
    },
});

function Login() {

    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    let history = useHistory();

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    const postLoginUser = async () => {
        await LoginApi.postLoginApi(values).then(res => {
            login(res.data.token)
            setError(false)
            history.push("/pessoas")
        }).catch(error => {
            setError(true)
        })

    }

    return (

        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt="logo" />

            <form>
                <ThemeProvider theme={theme}>
                    {error && <InvalidLogin />}
                    <Field className={classes.margin} onChange={handleChange('email')} name="email" component={renderTextField} label="Name ou Email" />
                    <div></div>
                    <Field onChange={handleChange('password')} name="password" component={renderTextFieldPassword}
                        className={clsx(classes.margin, classes.textField)} type={showPassword ? 'text' : 'password'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        conditional={showPassword ? <VisibilityOff /> : <Visibility />}
                    />
                </ThemeProvider>
                <div></div>
                <Button variant="contained" size="large" color="secondary" className={classes.marginButton} disabled={!buttonSubmitValidate} onClick={postLoginUser}> Login </Button>
            </form>
        </div>
    );
}
export default reduxForm({
    form: 'MaterialUiFormLogin',  // a unique identifier for this form
    validate
})(Login)
/*
alinhar ao centro
position: 'absolute',
margin: 'auto',
left: 0,
right: 0,
top: 0,
bottom: 0,
*/