import React from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import { RenderTextField, SelectField, RadioButtonType } from "../../../components/form/Form";
import { Validate } from './Validate';
import Card from "../../../components/CardForm";

const array = [
    { value: 'professor', label: 'Professor' },
    { value: 'estudante', label: 'Estudante' },
    { value: 'gestor', label: 'Gestor' },
    { value: 'usuarioComum', label: 'Usuário Comum' },
]

const Form = ({ handleSubmit, initialValues }) => {
    let validations = Validate(!initialValues._id)
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
            {({ values, isSubmitting, }) => (
                <FormikForm className='form'>
                    <Card>
                        <Field name="name" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Nome" />)}
                        </Field>

                        <Field name="email" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="email" label="Email" />)}
                        </Field>

                        <Field name="password" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="password" label="Senha" />)}
                        </Field>
                        {
                            !initialValues._id && (
                                <Field name="confirmPassword" >
                                    {({ field, meta }) => (
                                        <RenderTextField {...field} touched={meta.touched} error={meta.error} type="password" label="Confirma Senha" />)}
                                </Field>
                            )
                        }

                        <Field name="type" >
                            {({ field, meta }) => (
                                <SelectField {...field} touched={meta.touched} array={array} error={meta.error} type="text" label="Opções" />)}
                        </Field>

                        {(values.type === 'professor' || values.type === 'estudante') && (
                            <Field name="institution" >
                                {({ field, meta }) => (
                                    <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Instituição" />)}
                            </Field>
                        )}

                        {values.type === 'professor' && (
                            <Field name="can_edit" >
                                {({ field }) => (
                                    <RadioButtonType {...field} checked={values.can_edit} label="Dar permissão a esse professor ?" formControlLabelOne="Sim" formControlLabelTwo="Não" />)}
                            </Field>
                        )}
                    </Card>
                    <ButtomSubmit title={isSubmitting ? "Enviando..." : "Adicionar Usuário"} href={!initialValues._id ? "/pessoas" : ''} />
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;