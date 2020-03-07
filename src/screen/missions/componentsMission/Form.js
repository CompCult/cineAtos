import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { ButtomSubmit, ButtomAdvancedOptions } from "../../../components/buttom/Buttom";
import { RenderTextField, RadioButtonTypeSent, DataPicker, RadioButtonType } from "../../../components/form/Form";
import { Validate } from './Validate';
import Grid from "@material-ui/core/Grid";

const Form = ({ handleSubmit, initialValues }) => {

    const [openAdvancedOptions, setAdvancedOptions] = useState(false)

    function handleClickAdvancedOptions() {
        setAdvancedOptions(!openAdvancedOptions)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate}>
            {({ values, isSubmitting, setFieldValue }) => (
                <FormikForm className='form'>
                    <Field name="name" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Nome" />)}
                    </Field>

                    <Field name="description" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Descrição" rows="5" />)}
                    </Field>

                    <Field name="end_message" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Mensagem Final" rows="5" />)}
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

                    <Field name="has_text" >
                        {({ field }) => (
                            <RadioButtonType {...field} checked={values.has_text} label="Texto" formControlLabelOne="Sim" formControlLabelTwo="Não" />)}
                    </Field>


                    <Field name="has_image" >
                        {({ field }) => (
                            <RadioButtonType {...field} checked={values.has_image} label="Imagem" formControlLabelOne="Sim" formControlLabelTwo="Não" />)}
                    </Field>

                    <Field name="has_audio" >
                        {({ field }) => (
                            <RadioButtonType {...field} checked={values.has_audio} label="Áudio" formControlLabelOne="Sim" formControlLabelTwo="Não" />)}
                    </Field>

                    <Field name="has_geolocation" >
                        {({ field }) => (
                            <RadioButtonType {...field} checked={values.has_geolocation} label="Geolocalização" formControlLabelOne="Sim" formControlLabelTwo="Não" />)}
                    </Field>

                    <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />
                    {openAdvancedOptions && (
                        <>
                            <Field name="is_public" >
                                {({ field }) => (
                                    <RadioButtonType {...field} checked={values.is_public} label="Visibilidade" formControlLabelOne="Público" formControlLabelTwo="Privado" />)}
                            </Field>

                            <Field name="is_grupal" >
                                {({ field }) => (
                                    <RadioButtonType {...field} checked={values.is_grupal} label="Grupo" formControlLabelOne="Resposta Individual" formControlLabelTwo="Resposta em Grupo" />)}
                            </Field>

                            <Field name="single_answer" >
                                {({ field }) => (
                                    <RadioButtonType {...field} checked={values.single_answer} label="Único envio" formControlLabelOne="Uma única resposta pode ser enviada" formControlLabelTwo="Várias respostas podem ser enviadas" />)}
                            </Field>
                        </>
                    )}

                    <ButtomSubmit title={isSubmitting ? "Enviando..." : "Enviar Formulario"} />
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;