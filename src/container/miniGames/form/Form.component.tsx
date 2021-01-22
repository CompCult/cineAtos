import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form, CardAccordion, Img } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import MiniGames from '../interface/MiniGames';
import { Validate } from '../utils/Validate';

const FormMiniGames = ({ handleSubmit, initialValues, request, handleChangeImages, images }: FormProps) => {

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Formik initialValues={initialValues} onSubmit={async (values: MiniGames) => {
            await handleSubmit(values);
        }} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange, errors, isSubmitting }: FormikProps<MiniGames>) => (
                <FormikForm>
                    <CardAccordion>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Form.FormInput
                                    label='Título'
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange('title')}
                                    error={(values.title.length < 3) && !!errors.title}
                                    helperText={(values.title.length < 3) && errors.title}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Form.FormInputMultiline
                                    label='Descrição'
                                    name='description'
                                    value={values.description}
                                    onChange={handleChange('description')}
                                    error={(values.description.length < 3) && !!errors.description}
                                    helperText={(values.description.length < 3) && errors.description}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Form.FormInput
                                    label='Lux'
                                    type='number'
                                    name='lux'
                                    value={values.lux}
                                    onChange={handleChange('lux')}
                                    error={!!errors.lux}
                                    helperText={(values.lux < 3) && errors.lux}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Form.FormInput
                                    label='Resources'
                                    type='number'
                                    name='resources'
                                    value={values.resources}
                                    onChange={handleChange('resources')}
                                    error={!!errors.resources}
                                    helperText={(values.resources < 3) && errors.resources}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Form.ContainerRadio>
                                    <Form.LabelForm maxWidth={140}>Visibilidade do miniGame</Form.LabelForm>
                                    <Form.FormRadio name='is_public' value={values.is_public} onChange={handleChange('is_public')}>
                                        <Form.FormControlRadio
                                            value={true}
                                            checked={values.is_public === true || values.is_public === 'true'}
                                            label='Público'
                                        />
                                        <Form.FormControlRadio
                                            value={false}
                                            checked={values.is_public === false || values.is_public === 'false'}
                                            label='Privado'
                                        />
                                    </Form.FormRadio>
                                </Form.ContainerRadio>
                            </Grid>
                            <Grid item xs={12}>
                                {handleChangeImages && <Button.ButtonImport onChange={handleChangeImages} />}
                                {images && images.map((obj: any, index: number) => {
                                    return <Img src={obj} alt={`image-${index}`} key={index} />
                                })}
                            </Grid>
                        </Grid>
                        {console.log(images)}
                        <Button.ButtonForm link="/minigames/memoria" disabled={isSubmitting} />
                    </CardAccordion>
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormMiniGames;