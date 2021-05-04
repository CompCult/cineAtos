import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid, FormControl, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import User from '../interface/User';
import { Validate } from '../utils/Validate';
import { arrayType } from '../utils/ArrayType';

const FormPerson = ({ handleSubmit, initialValues, request, isRequired }: FormProps) => {

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate(isRequired)} validateOnChange={false} >
            {({ values, handleChange, errors, isSubmitting }: FormikProps<User>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Form.FormInput
                                label='Nome'
                                name='name'
                                value={values.name}
                                onChange={handleChange('name')}
                                error={(values.name.length < 3) && !!errors.name}
                                helperText={(values.name.length < 3) && errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Form.FormInput
                                label='Email'
                                name='email'
                                value={values.email}
                                onChange={handleChange('email')}
                                error={!values.email && !!errors.email}
                                helperText={!values.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Form.FormInput
                                label='Senha'
                                name='password'
                                type="password"
                                onChange={handleChange('password')}
                                error={(values.password.length < 6) && !!errors.password}
                                helperText={(values.password.length < 6) && errors.password}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Form.FormInput
                                label='Confirma Senha'
                                name='confirmPassword'
                                type="password"
                                value={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                error={(values.confirmPassword !== values.password) && !!errors.confirmPassword}
                                helperText={(values.confirmPassword !== values.password) && errors.confirmPassword}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
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
                        {(values.type === 'professor' || values.type === 'estudante') && (
                            <Grid item xs={12} sm={12} md={6}>
                                <Form.FormInput
                                    label='Instituição'
                                    name='institution'
                                    value={values.institution}
                                    onChange={handleChange('institution')}
                                    error={(!!errors.institution)}
                                    helperText={errors.institution}
                                />
                            </Grid>
                        )}

                        {values.type === 'professor' && (
                            <Grid item xs={12} sm={12} md={6}>
                                <Form.ContainerRadio>
                                    <Form.LabelForm maxWidth={185} correctHeight>Dar permissão a esse professor ?</Form.LabelForm>
                                    <Form.FormRadio name='can_edit' value={values.can_edit} onChange={handleChange('can_edit')}>
                                        <Form.FormControlRadio
                                            value={true}
                                            checked={values.can_edit === true || values.can_edit === 'true'}
                                            label='Sim'
                                        />
                                        <Form.FormControlRadio
                                            value={false}
                                            checked={values.can_edit === false || values.can_edit === 'false'}
                                            label='Não'
                                        />
                                    </Form.FormRadio>
                                </Form.ContainerRadio>
                            </Grid>
                        )}
                    </Grid>
                    <Button.ButtonForm link="/usuarios" disabled={isSubmitting} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormPerson;