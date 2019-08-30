import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import PersonApi from './PersonApi.js'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'email', 'password', 'type']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
  return errors
}

const renderTextField = ({ label, type, input, meta: { touched, invalid, error }, ...custom}) => (
  <FormControl fullWidth id='marginForm'>
    <TextField fullWidth label={label} placeholder={label} type={type}
      error={touched && invalid}
      helperText={touched && error}
      {...input} {...custom}/>
  </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({input, label, meta: { touched, error }, children, ...custom}) => (
  <FormControl fullWidth error={touched && error} id='marginForm'>
    <InputLabel>{label}</InputLabel>
    <Select {...input} {...custom}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

function RegisterPersonForm() {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
    institution: ''
  })
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    
  }

  const postNewUser = () => {
    const person = {
      name: values.name,
      email: values.email,
      password: values.password,
      type: values.type,
      institution: (values.type === 'gestor' || values.type === 'usuarioComum' ) ? '' : values.institution
    }
    PersonApi.postPersonApi(person).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  }
  
  const disabledButton = () => {
    if(values.type === 'professor' || values.type === 'estudante') {
      return (values.institution === '' && buttonSubmitValidate)
    }
  }

  return (
    <form id='form'>
      <Field onChange={handleChange('name')} name="name" component={renderTextField} type='text' label="Full Name"/>
      <Field onChange={handleChange('email')} name="email" component={renderTextField} type='email' label="Email"/>
      <Field onChange={handleChange('password')} name="password" component={renderTextField} type='password' label="Password"/>
      <Field onChange={handleChange('type')} name="type" component={renderSelectField} label="Options">
        <MenuItem value="professor">Professor</MenuItem>
        <MenuItem value="estudante">Estudante</MenuItem>
        <MenuItem value="gestor">Gestor</MenuItem>
        <MenuItem value="usuarioComum">Usuário Comum</MenuItem>
      </Field>
      {(values.type === 'professor' || values.type === 'estudante') && 
        <Field onChange={handleChange('institution')} name="institution" component={renderTextField} type='text' label="institution"/>
      }
      <Button type="submit" variant="contained" color="secondary" disabled={!(!disabledButton() && buttonSubmitValidate)} onClick={postNewUser}>Cadastrar</Button>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormPerson',  // a unique identifier for this form
  validate
})(RegisterPersonForm)