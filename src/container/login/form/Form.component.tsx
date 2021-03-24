import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import Login from '../interface/Login';
import { Validate } from '../utils/Validate';

const FormLogin = ({ handleSubmit, initialValues, request }: FormProps) => {

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Formik initialValues={initialValues} onSubmit={async (values: Login) => {
            await handleSubmit(values);
        }} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange, errors, isSubmitting }: FormikProps<Login>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Usuario'
                                name='email'
                                value={values.email}
                                onChange={handleChange('email')}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Senha'
                                name='password'
                                type="password"
                                value={values.password}
                                onChange={handleChange('password')}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button.ButtonC title="LOGIN" size="large" fullWidth disabled={isSubmitting} />
                        </Grid>
                    </Grid>
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormLogin;