import React from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { ButtomSubmit, ButtomImport } from "../../components/buttom/Buttom";
import { RenderTextField, RadioButtonType } from "../../components/form/Form";
import { Validate } from './Validate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    selectedImage: {
        width: "30%",
        height: "30%",
        maxWidth: 100,
        maxHeight: 50,
        margin: 5,
    }
}));

const Form = ({ handleChangeImages, handleSubmit, initialValues, images }) => {
    const classes = useStyles();

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate}>
            {({ values, isSubmitting }) => (
                <FormikForm className='form'>
                    <Field name="title" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Título do miniGame" />)}
                    </Field>

                    <Field name="description" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="text" label="Descrição do miniGame" rows="5" />)}
                    </Field>

                    <Field name="lux" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="Lux" />)}
                    </Field>

                    <Field name="resources" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="Recursos" />)}
                    </Field>

                    <Field name="is_public" >
                        {({ field }) => (
                            <RadioButtonType {...field} checked={values.is_public} label="Visibilidade do miniGame" formControlLabelOne="Público" formControlLabelTwo="Privado" />)}
                    </Field>
                    {images && (
                        <>
                            <ButtomImport onChange={handleChangeImages} title="Escolher imagens para o jogo da memória" />
                            <div>
                                {images.map((obj, index) => {
                                    values.images = images
                                    return <img src={obj} className={classes.selectedImage} alt={'images'} key={index} />
                                })}
                            </div>
                        </>
                    )}
                    <ButtomSubmit title={isSubmitting ? "Enviando..." : "Enviar Formulario"} disabled={images.length < 2} />
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;