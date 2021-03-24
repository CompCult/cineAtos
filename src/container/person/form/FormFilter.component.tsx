import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Modal, Form } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid, FormControl, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import User from '../interface/User';
import { arrayType } from '../utils/ArrayType';

const FormPerson = ({ handleSubmit, initialValues, onClick }: FormProps) => {

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}    >
            {({ values, handleChange, errors }: FormikProps<User>) => (
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
                                label='Email'
                                name='email'
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Pontos'
                                name='sec_points'
                                type='number'
                                value={values.sec_points || ''}
                                onChange={handleChange('sec_points')}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl variant="outlined" fullWidth error={!values.type && !!errors.type} >
                                <InputLabel id="type">Opções</InputLabel>
                                <Form.FormSelect
                                    label='Opções'
                                    name='type'
                                    value={values.type}
                                    onChange={handleChange('type')}
                                >
                                    {arrayType.map((type: any, index: number) => {
                                        return <MenuItem value={type.id || index} key={index}>{type.label}</MenuItem>
                                    })}
                                </Form.FormSelect>
                                <FormHelperText>{!values.type && errors.type}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Modal.ActionModal title={'Filtrar'} onClick={onClick} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormPerson;