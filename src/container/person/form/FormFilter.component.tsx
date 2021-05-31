import 'date-fns';
import React from 'react';
import {useFormik } from 'formik';
import {Button, GridComponent } from "../../../component/Component";
import { FormInterface } from '../../../interfaces/form/Form';
import {FormInput} from '../../../component/input/InputStyle';
import { MenuItem, FormHelperText, Select } from '@material-ui/core';
import FormLabel from '../../../component/input/FormLabel.component';
import { arrayType } from '../utils/ArrayType';
import { InterfacePagination } from '../interface/UserPagination';
import { Validate } from '../utils/Validate';


const FormPerson = ({ handleSubmitForm, initialValues, request }: FormInterface<InterfacePagination>) => {

    const { handleSubmit, handleChange, values, errors } = useFormik<InterfacePagination>({
        initialValues: initialValues,
        validationSchema: Validate(!initialValues._id),
        onSubmit: valuesSubimit => {
            handleSubmitForm(valuesSubimit);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <GridComponent justify='flex-start' spacing={3}>
                <FormLabel title="Nome" sm={12} md={6} required={true}>
                    <FormInput
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Email" sm={12} md={6} required={true}>
                    <FormInput
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Pontos" sm={12} md={6} required={true}>
                    <FormInput
                        name='sec_points'
                        type='number'
                        value={values.sec_points}
                        onChange={handleChange}
                    />
                </FormLabel>

                <FormLabel title="Instituição" sm={12} md={6} required={true}>
                    <FormInput
                        name='institution'
                        value={values.institution}
                        onChange={handleChange}
                    />
                </FormLabel>

                <FormLabel title="Opções" sm={12} md={6} required={true}>
                    <Select
                        name='type'
                        value={values.type}
                        onChange={handleChange('type')}
                    >
                        {arrayType.map((type: any, index: number) => {
                            return <MenuItem value={type.id || index} key={index}>{type.label}</MenuItem>
                        })}
                    </Select>
                    <FormHelperText>{/*(values.type.length < 1) && errors.type*/}</FormHelperText>
                </FormLabel>
            </GridComponent>
            <Button.ButtonForm link="/usuarios" disabled={request} />
        </form>
    )
}
/*const FormPerson = ({ handleSubmitForm, initialValues, onClick }: FormInterface<User>) => {

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}    >
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
}*/
export default FormPerson;