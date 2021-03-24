import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Modal, Form } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import Missions from '../interface/Quizzes';

const FormQuizzes = ({ handleSubmit, initialValues, onClick }: FormProps) => {

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}  >
            {({ values, handleChange }: FormikProps<Missions>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Título'
                                name='title'
                                value={values.title}
                                onChange={handleChange('title')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form.FormInput
                                label='Lux'
                                type='number'
                                name='lux'
                                value={values.lux || ''}
                                onChange={handleChange('lux')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form.FormInput
                                label='Resources'
                                type='number'
                                name='resources'
                                value={values.resources || ''}
                                onChange={handleChange('resources')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Código secreto'
                                name='secret_code'
                                value={values.secret_code}
                                onChange={handleChange('secret_code')}
                            />
                        </Grid>
                    </Grid>
                    <Modal.ActionModal title={'Filtrar'} onClick={onClick} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormQuizzes;