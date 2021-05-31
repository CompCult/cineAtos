import 'date-fns';
import React from 'react';
import {useFormik } from 'formik';
import { Button, GridComponent } from "../../../component/Component";
import FormLabel from '../../../component/input/FormLabel.component';
import { Validate } from '../utils/Validate';
import { FormInput} from '../../../component/input/InputStyle';
import { FormInterface } from '../../../interfaces/form/Form';
import { InterfacePagination } from '../interface/MissionsPagination';

const FormMissions = ({ handleSubmitForm, initialValues, request }: FormInterface<InterfacePagination>) => {

    const { handleSubmit, handleChange, values, errors} = useFormik<InterfacePagination>({
        initialValues: initialValues,
        validationSchema: Validate(),
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
                <FormLabel title="Descrição" sm={12} md={6} required={true}>
                    <FormInput
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Messagem Final" sm={12} md={6} required={true}>
                    <FormInput
                        name='end_message'
                        value={values.end_message}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Lux" sm={12} md={6} required={true}>
                    <FormInput
                        type='number'
                        name='lux'
                        value={values.lux}
                        onChange={handleChange('lux')}
                        error={!!errors.lux}
                    />
                </FormLabel>
                <FormLabel title="Resources" sm={12} md={6} required={true}>
                    <FormInput
                        type='number'
                        name='resources'
                        value={values.resources}
                        onChange={handleChange('resources')}
                        error={!!errors.resources}
                    />
                </FormLabel>
            </GridComponent>
            <Button.ButtonForm link="/missoes/minhas-missoes" disabled={request} />
        </form>
    )
}
export default FormMissions;
/*
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
export default FormMissions;*/