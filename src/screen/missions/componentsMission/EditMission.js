import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import MissionsApi from '../MissionsApi.js'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { DataPicker, RenderTextField, RadioButton, RadioButtonTypeSent } from '../../../components/form/Form'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    title: {
        textAlign: 'center',
        marginBottom: '1%'
    }
}));

function EditMission({ mission }) {
    const classes = useStyles();
    const [values, setValues] = useState(mission)
    const [openAdvancedOptions, setAdvancedOptions] = useState(false)

    function handleClickAdvancedOptions() {
        setAdvancedOptions(!openAdvancedOptions)
    }

    const handleChange = name => event => {
        if (name === 'start_time' || name === 'end_time') {
            setValues({ ...values, [name]: event })
        }
        else if (name === 'is_public' || name === 'single_answer' || name === 'is_grupal' || name === 'has_image' || name === 'has_video' || name === 'has_text' || name === 'has_audio' || name === 'has_geolocation') {
            setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
        } else {
            setValues({ ...values, [name]: event.target.value })
        }
    }

    const putMissionApi = async () => {
        await MissionsApi.putMissionApi(values, values._id).then(res => {
        }).catch(error => {
            console.log(error.response)
        })
    }

    const advancedOptions = (
        <Fragment>
            <Field onChange={handleChange('is_public')} name="is_public" component={RadioButton} label="Visibilidade">
                <FormControlLabel value="true" checked={values.is_public === true} control={<Radio />} label="Público" id='radioButtonCor' />
                <FormControlLabel value="false" checked={values.is_public === false} control={<Radio />} label="Privado" id='radioButtonCor' />
            </Field>
            <div></div>
            <Field onChange={handleChange('is_grupal')} name="is_grupal" component={RadioButton} label="Grupo">
                <FormControlLabel value="false" checked={values.is_grupal === false} control={<Radio />} label="Resposta Individual" id='radioButtonCor' />
                <FormControlLabel value="true" checked={values.is_grupal === true} control={<Radio />} label="Resposta em grupo" id='radioButtonCor' />
            </Field>
            <div></div>
            <Field onChange={handleChange('single_answer')} name="single_answer" component={RadioButton} label="Único envio">
                <FormControlLabel value="true" checked={values.single_answer === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor' />
                <FormControlLabel value="false" checked={values.single_answer === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor' />
            </Field>
            <div></div>
        </Fragment>
    )

    const options = (
        <Fragment>
            <Field onChange={handleChange('has_image')} name="has_image" component={RadioButtonTypeSent} checked={values.has_image} label="Imagem" />
            <Field onChange={handleChange('has_text')} name="has_text" component={RadioButtonTypeSent} checked={values.has_text} label="Texto" />
           {/*
            <Field onChange={handleChange('has_video')} name="has_video" component={RadioButtonTypeSent} checked={values.has_video} label="Vídeo" />
            <Field onChange={handleChange('has_audio')} name="has_audio" component={RadioButtonTypeSent} checked={values.has_audio} label="Áudio" />
            <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={RadioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização" />
            */
           }
        </Fragment>
    )

    return (
        <Fragment>
            <div className={classes.title}>
                <Box fontSize={60} fontWeight="fontWeightBold">Atualizar missões</Box>
            </div>

            <form className={classes.root}>
                <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome" valueDefault={values.name} />
                <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" valueDefault={values.description} />

                <Field onChange={handleChange('end_message')} name="end_message" component={RenderTextField} type='text' label="Mensagem Final" valueDefault={values.end_message} />

                <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos" valueDefault={values.points} />

                <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                    <Field onChange={handleChange('start_time')} name="start_time" component={DataPicker} label={"Data de Início"} selectedDate={values.start_time} disablePast={false} />
                    <Field onChange={handleChange('end_time')} name="end_time" component={DataPicker} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time} disablePast={false} />
                </Grid>

                {options}

                <div id='marginForm'>
                    <Button size="large" onClick={handleClickAdvancedOptions}>Opções Avançadas</Button>
                </div>
                {openAdvancedOptions && advancedOptions}

                <Button type="submit" variant="contained" color="primary" onClick={putMissionApi}>Atualizar</Button>
            </form>
        </Fragment>
    )
}
export default reduxForm({
    form: 'MaterialUiFormEditMission',  // a unique identifier for this form
})(EditMission)