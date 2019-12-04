import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import PersonApi from '../PersonApi.js'
import Button from '@material-ui/core/Button'
import { RenderTextField,  SelectFieldUpdate} from '../../../components/form/Form'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
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

function EditPerson({ person }) {
    const classes = useStyles();
    const [values, setValues] = useState(person)
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const putPersonApi = async () => {
        await PersonApi.putPersonApi(values, values._id).then(res => {
        }).catch(error => {
            console.log(error.response)
        })
    }

    return (
        <Fragment>
            <div className={classes.title}>
                <Box fontSize={60} fontWeight="fontWeightBold">Atualizar Usuario</Box>
            </div>

            <form className={classes.root}>
            <Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Full Name" valueDefault={values.name} />
                <Field onChange={handleChange('email')} name="email" component={RenderTextField} type='email' label="Email" valueDefault={values.email} />
                <Field onChange={handleChange('password')} name="password" component={RenderTextField} type='text' label="Password" />
                <Field onChange={handleChange('type')} name="type" component={SelectFieldUpdate} label="Options" valueDefault={values.type}>
                    <MenuItem value="professor">Professor</MenuItem>
                    <MenuItem value="estudante">Estudante</MenuItem>
                    <MenuItem value="gestor">Gestor</MenuItem>
                    <MenuItem value="usuarioComum">Usuário Comum</MenuItem>
                </Field>
              
                <Field onChange={handleChange('institution')} name="institution" component={RenderTextField} type='text' label="institution" valueDefault={values.institution}/>
                
                <Button type="submit" variant="contained" color="primary" onClick={putPersonApi}>Atualizar</Button>
            </form>
        </Fragment>
    )
}
export default reduxForm({
    form: 'MaterialUiFormEditPerson',  // a unique identifier for this form
})(EditPerson)