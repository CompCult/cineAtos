import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Modal, Form } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import Missions from '../interface/Missions';
import { Validate } from '../utils/Validate';

const FormMissions = ({ handleSubmit, initialValues, onClick }: FormProps) => {

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange }: FormikProps<Missions>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Nome'
                                name='name'
                                value={values.name}
                                onChange={handleChange('name')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Descrição'
                                name='description'
                                value={values.description}
                                onChange={handleChange('description')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Messagem Final'
                                name='end_message'
                                value={values.end_message}
                                onChange={handleChange('end_message')}
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
                    </Grid>

                    <Modal.ActionModal title={'Filtrar'} onClick={onClick} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormMissions;