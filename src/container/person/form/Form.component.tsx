import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import { Button } from "../../../component/Component";
import { MenuItem, FormHelperText, Select } from '@material-ui/core';
import User from '../interface/User';
import { Validate } from '../utils/Validate';
import { arrayType } from '../utils/ArrayType';
import { FormInterface } from '../../../interfaces/form/Form';
import GridComponent from '../../../component/grid/GridComponent.component';
import FormLabel from '../../../component/input/FormLabel.component';
import { FormControlRadio, FormInput, FormRadio, FormSelect } from '../../../component/input/InputStyle';

const FormPerson = ({ handleSubmitForm, initialValues, request }: FormInterface<User>) => {

    const { handleSubmit, handleChange, values, errors } = useFormik<User>({
        initialValues: initialValues,
        validationSchema: Validate(!initialValues._id),
        onSubmit: values => {
            handleSubmitForm(values);
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
                        error={(values.name.length < 3) && !!errors.name}
                        helperText={(values.name.length < 3) && errors.name}
                    />
                </FormLabel>
                <FormLabel title="Email" sm={12} md={6} required={true}>
                    <FormInput
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        error={!values.email && !!errors.email}
                        helperText={!values.email && errors.email}
                    />
                </FormLabel>
                <FormLabel title="Senha" sm={12} md={6} required={true}>
                    <FormInput
                        name='password'
                        type="password"
                        onChange={handleChange('password')}
                        error={(values.password.length < 6) && !!errors.password}
                        helperText={(values.password.length < 6) && errors.password}
                    />
                </FormLabel>
                <FormLabel title="Confirma Senha" sm={12} md={6} required={true}>
                    <FormInput
                        name='confirmPassword'
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        error={(values.confirmPassword !== values.password) && !!errors.confirmPassword}
                        helperText={(values.confirmPassword !== values.password) && errors.confirmPassword}
                    />
                </FormLabel>

                <FormLabel title="Opções" sm={12} md={6} required={true}>
                    <Select
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        input={<FormSelect />}
                        defaultValue="0"
                    >
                        <MenuItem value="0" disabled>Selecione</MenuItem>
                        {arrayType.map((type: any, index: number) => {
                            return <MenuItem value={type.id || index} key={index}>{type.label}</MenuItem>
                        })}
                    </Select>
                    <FormHelperText>{!values.type && errors.type}</FormHelperText>
                </FormLabel>

                {(values.type === 'professor' || values.type === 'estudante') && (
                    <FormLabel title="Instituição" sm={12} md={6} required={true}>
                        <FormInput
                            name='institution'
                            value={values.institution}
                            onChange={handleChange('institution')}
                            error={(!!errors.institution)}
                            helperText={errors.institution}
                        />
                    </FormLabel>
                )}

                {values.type === 'professor' && (
                    <FormLabel title="Dar permissão a esse professor ?" required={false} sm={12} >
                        <FormRadio value={values.can_edit || ''} name="can_edit" onChange={handleChange} >
                            <FormControlRadio
                                label="Sim"
                                value={'true'}
                            />
                            <FormControlRadio
                                label="Não"
                                value={'false'}
                            />

                        </FormRadio>
                    </FormLabel>
                )}
            </GridComponent>
            <Button.ButtonForm link="/usuarios" disabled={request} />
        </form>
    )
}
export default FormPerson;