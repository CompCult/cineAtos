import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../App.css'
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
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

const radioButtonGrupo = ({ input, label, ...rest }) => (
  <FormControl component="fieldset" id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest}>
      <FormControlLabel value="respostaEmGrupo" control={<Radio />} label="Resposta em grupo" id='radioButtonCor'/>
      <FormControlLabel value="respostaIndividual" control={<Radio />} label="Resposta Individual" id='radioButtonCor'/>
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

const radioButtonTipoEnviou = ({ input, label, ...rest }) => (
  <div  id='marginForm'>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel value="sim" control={<Radio />} label="Sim" id='radioButtonCor'/>
      <FormControlLabel value="nao" control={<Radio />} label="Nao" id='radioButtonCor'/>
    </RadioGroup>
  </div>
)

const calendario = ({ input, selectedDate, minData, label }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
      label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true}/>
      <div id='marginForm'></div>
  </MuiPickersUtilsProvider>
)

function CreateMissionForm() {
  
  const [values, setValues] = useState({
    dataInicio: new Date(),
    dataFim: new Date(),
    nome: '',
    descricao: '',
    mensagemFinal: '',
    pontos: '',
    visibilidade: '',
    grupo: '',
    unicoEnvio: '',
    imagem: '',
    video: '',
    texto: '',
    audio: '',
    geolocacao: '',
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
      <Field onChange={handleChange('dataInicio')} name="dataInicio" component={calendario} label={"Data de Início"} selectedDate={values.dataInicio}/>
      <Field onChange={handleChange('dataFim')} name="dataFim" component={calendario} label={"Data de Fim"} minData={values.dataInicio} selectedDate={values.dataFim}/>
     
      <Field onChange={handleChange('nome')} name="nome" component={renderInput} type='text' label="Nome"/>
      <Field onChange={handleChange('descricao')} name="descricao" component={renderInput} type='text' label="Descrição"/>
      <Field onChange={handleChange('mensagemFinal')} name="mensagemFinal" component={renderInput} type='text' label="Mensagem Final"/>
      <Field onChange={handleChange('pontos')} name="pontos" component={renderInput} type='number' label="Pontos"/>
      <Field onChange={handleChange('visibilidade')} name="visibilidade" component={radioButtonVisibilidade} label="Visibilidade"/>
      <div></div>
      <Field onChange={handleChange('grupo')} name="grupo" component={radioButtonGrupo} label="Grupo"/>
      <div></div>
      <Field onChange={handleChange('unicoEnvio')} name="unicoEnvio" component={radioButtonRespostaEnviada} label="Único envio"/>
      <div></div>
      <Field onChange={handleChange('imagem')} name="imagem" component={radioButtonTipoEnviou} label="Imagem"/>
      <Field onChange={handleChange('video')} name="video" component={radioButtonTipoEnviou} label="Vídeo"/>
      <Field onChange={handleChange('texto')} name="texto" component={radioButtonTipoEnviou} label="Texto"/>
      <Field onChange={handleChange('audio')} name="audio" component={radioButtonTipoEnviou} label="Áudio"/>
      <Field onChange={handleChange('geolocacao')} name="geolocacao" component={radioButtonTipoEnviou} label="Geolocalização"/>

      <div></div>
      <Button type="submit" variant="contained" color="secondary" disabled={!(buttonSubmitValidate)} onClick={console.log('enviou')}> Cadastrar </Button>
    
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiFormMission',  // a unique identifier for this form
  validate
})(CreateMissionForm)