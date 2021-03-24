import 'date-fns';
import React, { ChangeEvent } from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Form, Img } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import MiniGames from '../interface/MiniGames';
import { Validate } from '../utils/Validate';

const FormMiniGames = ({ handleSubmit, initialValues, isImages }: FormProps) => {

    const addImage = (file: File, imagesAux: Array<any>, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            imagesAux.push(reader.result);
            setFieldValue('images', imagesAux);
        };
    }


    const handleChangeImg = (setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void, event: ChangeEvent<HTMLInputElement>, images: Array<any>): void => {
        var imagesAux: Array<any> = [...images];

        if (event.target.files?.length && imagesAux.length <= 8) {
            for (let index = 0; index < event.target.files?.length; index++) {
                let file = event.target.files[index];
                addImage(file, imagesAux, setFieldValue);
            }
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange, errors, isSubmitting, setFieldValue }: FormikProps<MiniGames>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Título'
                                name='title'
                                value={values.title}
                                onChange={handleChange('title')}
                                error={(values.title.length < 3) && !!errors.title}
                                helperText={(values.title.length < 3) && errors.title}
                                disabled={!!values?._id}
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
                                disabled={!!values?._id}
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
                                disabled={!!values?._id}
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
                                disabled={!!values?._id}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm maxWidth={140} correctHeight>Visibilidade do miniGame</Form.LabelForm>
                                <Form.FormRadio name='is_public' value={values.is_public} onChange={handleChange('is_public')} >
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.is_public === true || values.is_public === 'true'}
                                        label='Público'
                                        disabled={!!values?._id}
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.is_public === false || values.is_public === 'false'}
                                        label='Privado'
                                        disabled={!!values?._id}
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            {isImages && <Button.ButtonImport onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeImg(setFieldValue, event, values.images || [])} disabled={!!values?._id} />}
                            {values.images && values.images.map((obj: any, index: number) => {
                                return <Img src={obj} alt={`image-${index}`} key={index} borderRadius={12} />
                            })}
                        </Grid>
                    </Grid>

                    <Button.ButtonForm link="/minigames/memoria" disabled={isSubmitting || !!values?._id} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormMiniGames;