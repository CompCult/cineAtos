import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

var buttonSubmitValidate = false

const validate = values => {
  const errors = {}
  
  const requiredFields = [ 'titulo', 'descricao', 'pontos' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })

    buttonSubmitValidate = (Object.keys(errors).length === 0) ? true : false

  return errors
}

const renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {

  if (touched && error) {
    return (
      <FormControl fullWidth id='marginForm'>
        <InputLabel htmlFor="name-error" error>{label}</InputLabel>
        <Input type={type} {...input} {...custom} error/>
        <FormHelperText error>{touched && error}</FormHelperText>
      </FormControl>
    )
  }

  return (
    <FormControl fullWidth id='marginForm'>
      <InputLabel>{label}</InputLabel>
      <Input type={type} {...input} {...custom}/>
    </FormControl>
  )
}

const radioButtonVisibilidade = ({ input, label, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Público" id='radioButtonCor'/>
      <FormControlLabel value="male" control={<Radio />} label="Privado" id='radioButtonCor'/>
    </RadioGroup>
  </FormControl>
)

const radioButtonRespostaEnviada = ({ input, label, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="unicaResposta" control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor'/>
      <FormControlLabel value="variasResposta" control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor'/>
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

const renderInputSelect = ({ input, label, value, ...custom }) => (
  <FormControl fullWidth id='marginForm'>
    <InputLabel>{label}</InputLabel>
    <Select value={value} name="name" {...input} {...custom}>
      <MenuItem value="A">A</MenuItem>
      <MenuItem value="B">B</MenuItem>
      <MenuItem value="C">C</MenuItem>
      <MenuItem value="D">D</MenuItem>
      <MenuItem value="E">E</MenuItem>
    </Select>
  </FormControl>
)

function CreateChoicesForm() {
  
  const [values, setValues] = useState({
    titulo: '',
    descricao: '',
    pontos: '',
    visibilidade: '',
    unicoEnvio: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    alternativa: '',
    alternativaCorreta: ''
  })
  
  const handleChange = name => event => {
    if(name === 'dataInicio' || name === 'dataFim'){
      setValues({ ...values, [name]: event })
    }else {
      setValues({ ...values, [name]: event.target.value })
    }
  }
  console.log(values)
/*  const enviar = () => {
    PersonApi.postPersonApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  } */

  return (

    <form id="form" >
      <Field onChange={handleChange('titulo')} name="titulo" component={renderInput} type='text' label="Título"/>
      <Field onChange={handleChange('descricao')} name="descricao" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('pontos')} name="pontos" component={renderInput} type='number' label="Pontos"/>
      <Field onChange={handleChange('visibilidade')} name="visibilidade" component={radioButtonVisibilidade} label="Visibilidade"/>
      <div></div>
      <Field onChange={handleChange('unicoEnvio')} name="unicoEnvio" component={radioButtonRespostaEnviada} label="Único envio"/>
      <div></div>
      <Field onChange={handleChange('dataInicio')} name="dataInicio" component={calendario} label={"Data de Início"} selectedDate={values.dataInicio}/>
      <Field onChange={handleChange('dataFim')} name="dataFim" component={calendario} label={"Data de Fim"} minData={values.dataInicio} selectedDate={values.dataFim}/>

      <Field onChange={handleChange('alternativa')} name="alternativaA" component={renderInput} type='text' label="Alternativa A"/>
      <Field onChange={handleChange('alternativa')} name="alternativaB" component={renderInput} type='text' label="Alternativa B"/>
      <Field onChange={handleChange('alternativa')} name="alternativaC" component={renderInput} type='text' label="Alternativa C"/>
      <Field onChange={handleChange('alternativa')} name="alternativaD" component={renderInput} type='text' label="Alternativa D"/>
      <Field onChange={handleChange('alternativa')} name="alternativaE" component={renderInput} type='text' label="Alternativa E"/>
     
      <Field onChange={handleChange('alternativaCorreta')} name="resposta" component={renderInputSelect} type='text' label="Alternativa Correta"/>
      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={console.log('enviou')}> Cadastrar </Button>
    
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormChoices',  // a unique identifier for this form
  validate
})(CreateChoicesForm)