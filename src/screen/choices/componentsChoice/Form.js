import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { ButtomSubmit, ButtomAdvancedOptions } from "../../../components/buttom/Buttom";
import { RenderTextField, SelectField, DataPicker, RadioButtonType } from "../../../components/form/Form";
import { Validate } from './Validate';
import Grid from "@material-ui/core/Grid";
import Card from "../../../components/CardForm";

const array = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
    { value: 'd', label: 'D' },
    { value: 'e', label: 'E' },
];

const Form = ({ handleSubmit, initialValues }) => {

    const [openAdvancedOptions, setAdvancedOptions] = useState(false)

    function handleClickAdvancedOptions() {
        setAdvancedOptions(!openAdvancedOptions)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate}>
            {({ values, isSubmitting, setFieldValue }) => (
                <FormikForm className='form'>
                    <Card>
                        <Field name="title" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Título" />)}
                        </Field>

                        <Field name="description" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Descrição" rows="5" />)}
                        </Field>

                        <Field name="lux" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="Lux" />)}
                        </Field>

                        <Field name="resources" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="Recursos" />)}
                        </Field>

                        <Grid container direction="row" justify="space-between" alignItems="flex-start">
                            <Field name="start_time">
                                {({ field, meta }) => (
                                    <DataPicker {...field} touched={meta.touched} field={field} error={meta.error} label="Data de Início"
                                        onChange={date => setFieldValue('start_time', date)} />)}
                            </Field>

                            <Field name="end_time">
                                {({ field, meta }) => (
                                    <DataPicker {...field} touched={meta.touched} field={field} error={meta.error} label="Data de Fim"
                                        onChange={date => setFieldValue('end_time', date)} minData={values.start_time} />)}
                            </Field>
                        </Grid>

                        <Field name="alternative_a" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Alternativa A" rows="5" />)}
                        </Field>

                        <Field name="alternative_b" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Alternativa B" rows="5" />)}
                        </Field>

                        <Field name="alternative_c" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Alternativa C" rows="5" />)}
                        </Field>

                        <Field name="alternative_d" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Alternativa D" rows="5" />)}
                        </Field>

                        <Field name="alternative_e" >
                            {({ field, meta }) => (
                                <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Alternativa E" rows="5" />)}
                        </Field>

                        <Field name="correct_answer" >
                            {({ field, meta }) => (
                                <SelectField {...field} touched={meta.touched} array={array} error={meta.error} type="text" label="Alternativa Correta" />)}
                        </Field>

                        <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />
                        {openAdvancedOptions && (
                            <>
                                <Field name="is_public" >
                                    {({ field }) => (
                                        <RadioButtonType {...field} checked={values.is_public} label="Visibilidade" formControlLabelOne="Público" formControlLabelTwo="Privado" />)}
                                </Field>

                                <Field name="single_answer" >
                                    {({ field }) => (
                                        <RadioButtonType {...field} checked={values.single_answer} label="Único envio" formControlLabelOne="Uma única resposta pode ser enviada" formControlLabelTwo="Várias respostas podem ser enviadas" />)}
                                </Field>
                            </>
                        )}
                    </Card>
                    <ButtomSubmit title={isSubmitting ? "Enviando..." : "Enviar Formulario"} href={!initialValues._id ? "/quiz/meus-quizes" : ''} />
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;