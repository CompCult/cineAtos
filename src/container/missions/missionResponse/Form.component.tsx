import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Form, CardAccordion } from "../../../component/Component";
import { Grid } from '@material-ui/core';

const FormMissions = ({ handleSubmit, initialValues }: any) => {


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validateOnChange={false} >
            {({ values, handleChange, isSubmitting }: FormikProps<any>) => (
                <FormikForm>
                    <CardAccordion>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Form.FormInput
                                    label='imp'
                                    type='number'
                                    name='imp'
                                    value={values.imp}
                                    onChange={handleChange('imp')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Form.FormInput
                                    label='People'
                                    type='number'
                                    name='people'
                                    value={values.people}
                                    onChange={handleChange('people')}
                                />
                            </Grid>

                        </Grid>

                        <Button.ButtonForm disabled={isSubmitting} />
                    </CardAccordion>
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormMissions;