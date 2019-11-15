import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import ChoicesApi from '../ChoicesApi.js'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { DataPicker, RenderTextField, RadioButton, SelectFieldUpdate } from '../../../components/form/Form'
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

function EditQuiz({ quiz }) {
    const classes = useStyles();
    const [values, setValues] = useState(quiz)
    const [openAdvancedOptions, setAdvancedOptions] = useState(false)

    function handleClickAdvancedOptions() {
        setAdvancedOptions(!openAdvancedOptions)
    }

    const handleChange = name => event => {
        if (name === 'start_time' || name === 'end_time') {
            setValues({ ...values, [name]: event })
        }
        else if (name === 'is_public' || name === 'single_answer') {
            setValues({ ...values, [name]: event.target.value === 'true' ? true : false })
        } else {
            setValues({ ...values, [name]: event.target.value })
        }
    }

    const putChoicesApi = async () => {
        await ChoicesApi.putChoicesApi(values, values._id).then(res => {
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
            <Field onChange={handleChange('single_answer')} name="single_answer" component={RadioButton} label="Único envio">
                <FormControlLabel value="true" checked={values.single_answer === true} control={<Radio />} label="Uma única resposta pode ser enviada" id='radioButtonCor' />
                <FormControlLabel value="false" checked={values.single_answer === false} control={<Radio />} label="Várias respostas podem ser enviadas" id='radioButtonCor' />
            </Field>
            <div></div>
        </Fragment>
    )

    return (
        <Fragment>
            <div className={classes.title}>
                <Box fontSize={60} fontWeight="fontWeightBold">Atualizar quizz</Box>
            </div>

            <form className={classes.root}>
                <Field onChange={handleChange('title')} name="title" component={RenderTextField} type='text' label="Título" valueDefault={values.title} />
                <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" valueDefault={values.description} />
                <Field onChange={handleChange('points')} name="points" component={RenderTextField} type='number' label="Pontos" valueDefault={values.points} />

                <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                    <Field onChange={handleChange('start_time')} name="start_time" component={DataPicker} label={"Data de Início"} selectedDate={values.start_time} disablePast={false} />
                    <Field onChange={handleChange('end_time')} name="end_time" component={DataPicker} label={"Data de Fim"} minData={values.start_time} selectedDate={values.end_time} disablePast={false} />
                </Grid>

                <Field onChange={handleChange('alternative_a')} name="alternative_a" component={RenderTextField} type='text' label="Alternativa A" valueDefault={values.alternative_a} />
                <Field onChange={handleChange('alternative_b')} name="alternative_b" component={RenderTextField} type='text' label="Alternativa B" valueDefault={values.alternative_b} />
                <Field onChange={handleChange('alternative_c')} name="alternative_c" component={RenderTextField} type='text' label="Alternativa C" valueDefault={values.alternative_c} />
                <Field onChange={handleChange('alternative_d')} name="alternative_d" component={RenderTextField} type='text' label="Alternativa D" valueDefault={values.alternative_d} />
                <Field onChange={handleChange('alternative_e')} name="alternative_e" component={RenderTextField} type='text' label="Alternativa E" valueDefault={values.alternative_e} />

                <Field onChange={handleChange('correct_answer')} name="correct_answer" component={SelectFieldUpdate} type='text' label="Alternativa Correta" valueDefault={values.correct_answer}>
                    <MenuItem value="a">A</MenuItem>
                    <MenuItem value="b">B</MenuItem>
                    <MenuItem value="c">C</MenuItem>
                    <MenuItem value="d">D</MenuItem>
                    <MenuItem value="e">E</MenuItem>
                </Field>
                <div id='marginForm'>
                    <Button size="large" onClick={handleClickAdvancedOptions}>Opções Avançadas</Button>
                </div>
                {openAdvancedOptions && advancedOptions}

                <Button type="submit" variant="contained" color="secondary" onClick={putChoicesApi}>Atualizar</Button>
            </form>
        </Fragment>
    )
}
export default reduxForm({
    form: 'MaterialUiFormEditQuiz',  // a unique identifier for this form
})(EditQuiz)