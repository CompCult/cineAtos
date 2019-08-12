import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

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

 // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //  errors.email = 'Invalid email address'
 // }
  return errors
}

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => {

    if (touched && error) {
        return (
            <div>
                <InputLabel error>{label}</InputLabel>
                <Input {...input} {...custom} error fullWidth/>
                <FormHelperText error>{touched && error}</FormHelperText>
            </div>
        )
    }

    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <Input {...input} {...custom} fullWidth/>
        </div>
    )
}

function MaterialUiForm() {

    const [values, setValues] = React.useState({
        name: '',
        lastName: ''
      })
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      }

      const imprimir = () => {
          console.log(values.name + " " + values.lastName)
      }

    return (

        <form>
            <Field onChange={handleChange('name')} name="firstName" component={renderInput} label="First Name"/>
            <Field onChange={handleChange('lastName')} name="lastName" component={renderInput} label="Last Name"/>

            <Button variant="contained" color="secondary" disabled={!buttonSubmitValidate} onClick={imprimir}> Enviar </Button>
        </form>

    )
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate
})(MaterialUiForm)