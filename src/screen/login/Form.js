import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import Button from "@material-ui/core/Button";
import { RenderTextField } from "../../components/form/Form";
import { Validate } from './Validate';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

const Form = ({ handleSubmit, initialValues, className }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate}>
            {({ isSubmitting, }) => (
                <FormikForm className='form'>

                    <Field name="email" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Name ou Email" />)}
                    </Field>

                    <Field name="password" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} label="Senha" type={showPassword ? "text" : "password"} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword} >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />
                        )}
                    </Field>

                    <Button type="submit" variant="contained" size="large" color="primary" className={className}>
                        {isSubmitting ? 'Carregando...' : 'Login'}
                    </Button>

                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;