import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import ChoicesApi from './ChoicesApi.js'
import Radio from '@material-ui/core/Radio'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  const requiredFields = ['title', 'description', 'points', 'alternative_a','alternative_b','alternative_c','alternative_d','alternative_e', 'correct_answer']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  
  buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false
  return errors
}

const renderTextField = ({ label, type, input, meta: { touched, invalid, error }, ...custom}) => (
  <FormControl fullWidth id='marginForm'>
    <TextField fullWidth label={label} placeholder={label} type={type}
      error={touched && invalid}
      helperText={touched && error}
      {...input} {...custom} />
  </FormControl>
)

const radioButton = ({ input, label, children, ...rest }) => (
  <FormControl id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup {...input} {...rest}>
      {children}
    </RadioGroup>
  </FormControl>
)

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true}/>
      <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
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

function CreateChoicesForm() {
  
  const [values, setValues] = useState({
    title: '',
    description: '',
    points: '',
    is_public: true,
    single_answer: true,
    start_time: new Date(),
    end_time: new Date(),
    alternative_a: '',
    alternative_b: '',
    alternative_c: '',
    alternative_d: '',
    alternative_e: '',
    correct_answer: ''
  })

  const [openAdvancedOptions, setAdvancedOptions] = React.useState(false)

  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions)
  }
  
  const handleChange = name => event => {
    if(name === 'start_time' || name === 'end_time'){
      setValues({ ...values, [name]: event })
    }
    else if(name === 'is_public' || name === 'single_answer') {
      setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
    }else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateChoices = () => {
    ChoicesApi.postChoicesApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  } 

  return (

    <form id="form" >
      <Field onChange={handleChange('title')} name="title" component={renderTextField} type='text' label="Título"/>
      <Field onChange={handleChange('description')} name="description" component={renderTextField} type='text' label="Descrição"/>
      <Field onChange={handleChange('points')} name="points" component={renderTextField} type='number' label="Pontos"/>
    
      <Field onChange={handleChange('start_time')} name="start_time" component={calendario} label={"Data de Início"} selectedDate={values.start_time}/>
      <Field onChange={handleChange('end_time')} name="end_time" component={calendario} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time}/>
     
      <Field onChange={handleChange('alternative_a')} name="alternative_a" component={renderTextField} type='text' label="Alternativa A"/>
      <Field onChange={handleChange('alternative_b')} name="alternative_b" component={renderTextField} type='text' label="Alternativa B"/>
      <Field onChange={handleChange('alternative_c')} name="alternative_c" component={renderTextField} type='text' label="Alternativa C"/>
      <Field onChange={handleChange('alternative_d')} name="alternative_d" component={renderTextField} type='text' label="Alternativa D"/>
      <Field onChange={handleChange('alternative_e')} name="alternative_e" component={renderTextField} type='text' label="Alternativa E"/>
     
      <Field onChange={handleChange('correct_answer')} name="correct_answer" component={renderSelectField} type='text' label="Alternativa Correta">
        <MenuItem value="a">A</MenuItem>
        <MenuItem value="b">B</MenuItem>
        <MenuItem value="c">C</MenuItem>
        <MenuItem value="d">D</MenuItem>
        <MenuItem value="e">E</MenuItem>
      </Field>
      <div id='marginForm'>
        <Button size="large" onClick={handleClickAdvancedOptions}>Opções Avançadas</Button>
      </div>
      {openAdvancedOptions && (
        <Fragment>
          <Field  onChange={handleChange('is_public')} name="is_public" component={radioButton} label="Visibilidade">
            <FormControlLabel value="true" checked={values.is_public === true} control={<Radio />} label="Público" id='radioButtonCor'/>
            <FormControlLabel value="false" checked={values.is_public === false} control={<Radio />} label="Privado" id='radioButtonCor'/>
          </Field>
          <div></div>
          <Field  onChange={handleChange('single_answer')} name="single_answer" component={radioButton} label="Único envio">
              <FormControlLabel value="true" checked={values.single_answer === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
              <FormControlLabel value="false" checked={values.single_answer === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
          </Field>
          <div></div>
        </Fragment>
      )}

      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={postCreateChoices}>Cadastrar</Button>
    </form>
  )
}
export default reduxForm({
  form: 'MaterialUiFormChoices',  // a unique identifier for this form
  validate
})(CreateChoicesForm)