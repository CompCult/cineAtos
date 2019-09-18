import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import EventsApi from './EventsApi.js'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'description', 'place', 'type']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
  return errors
}

const renderTextField = ({ label, type, input, meta: { touched, invalid, error }, ...custom }) => (
  <FormControl fullWidth id='marginForm'>
    <TextField fullWidth label={label} placeholder={label} type={type}
      error={touched && invalid}
      helperText={touched && error}
      {...input} {...custom} />
  </FormControl>
)

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true} />
    <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
)

function CreateEventsForm() {

  const [values, setValues] = useState({
    name: '',
    start_date: new Date(),
    end_date: new Date(),
    description: '',
    place: '',
    type: ''
  })

  const handleChange = name => event => {
    if (name === 'start_date' || name === 'end_date') {
      setValues({ ...values, [name]: event })
    } else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateEvents = () => {
    EventsApi.postEventsApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  }

  return (

    <form id="form" >
      <Field onChange={handleChange('name')} name="name" component={renderTextField} type='text' label="Nome" />
      <Field onChange={handleChange('start_date')} name="start_date" component={calendario} label={"Data de Início"} selectedDate={values.start_date} />
      <Field onChange={handleChange('end_date')} name="end_date" component={calendario} label={"Data de Fim"} minData={values.start_date} selectedDate={values.end_date} />
      <Field onChange={handleChange('description')} name="description" component={renderTextField} type='text' label="Descrição" />
      <Field onChange={handleChange('place')} name="place" component={renderTextField} type='text' label="Local" />
      <Field onChange={handleChange('type')} name="type" component={renderTextField} type='text' label="Tipo" />
      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={postCreateEvents}> Cadastrar </Button>

    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormEvents',  // a unique identifier for this form
  validate
})(CreateEventsForm)