import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  
  const requiredFields = [ 'firstName', 'lastName' ]
  requiredFields.forEach(field => {
      if (!values[ field ]) {
          errors[ field ] = 'Required'
        }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false

  return errors
}

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {

    if (touched && error) {
        return (
            <FormControl fullWidth id='marginForm'>
                <InputLabel error>{label}</InputLabel>
                <Input {...input} {...custom} error/>
                <FormHelperText error>{touched && error}</FormHelperText>
            </FormControl>
        )
    }

    return (
        <FormControl fullWidth id='marginForm'>
            <InputLabel>{label}</InputLabel>
            <Input {...input} {...custom}/>
        </FormControl>
    )
}

function MaterialUiForm() {
 
    const [values, setValues] = React.useState({
      firstName: '',
        lastName: ''
      })
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      }

      const imprimir = () => {
          console.log(values.firstName + " " + values.lastName)
      }

    return (

        <form id="form">
            <Field onChange={handleChange('firstName')} name="firstName" component={renderInput} label="First Name"/>
            <Field onChange={handleChange('lastName')} name="lastName" component={renderInput} label="Last Name"/>

            <Button variant="contained" color="secondary" disabled={!buttonSubmitValidate} onClick={imprimir}> Enviar </Button>
        </form>
    )
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate
})(MaterialUiForm)