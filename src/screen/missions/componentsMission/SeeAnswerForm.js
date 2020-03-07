import React from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import { RenderTextField } from "../../../components/form/Form";

const Form = ({ handleSubmit, initialValues }) => {

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            {({ isSubmitting }) => (
                <FormikForm className='form'>
                    <Field name="imp" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="Imp" />)}
                    </Field>

                    <Field name="people" >
                        {({ field, meta }) => (
                            <RenderTextField {...field} touched={meta.touched} error={meta.error} type="number" label="People" />)}
                    </Field>

                    <ButtomSubmit title={isSubmitting ? "Enviando..." : "Enviar"} />
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;