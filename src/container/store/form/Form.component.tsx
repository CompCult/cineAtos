import 'date-fns';
import React, { ChangeEvent } from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form, GridComponent, Span, Img } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import Item from '../interface/Item';
import { Validate } from '../utils/Validate';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const FormItem = ({ handleSubmit, initialValues, request }: FormProps) => {

    if (request) {
        return <Progress open={request} />
    }

    const handleChangeImg = (setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void, event: ChangeEvent<HTMLInputElement>): void => {
        const reader = new FileReader();
        const { files } = event.target;
        if (files) {
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setFieldValue('image', reader.result);
            };
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange, errors, setFieldValue, isSubmitting }: FormikProps<Item>) => (
                <FormikForm>
                    {console.log(values.image)}
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Título do item'
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
                                label='Quantidade'
                                type='number'
                                name='quantity'
                                value={values.quantity}
                                onChange={handleChange('quantity')}
                                error={!!errors.quantity}
                                helperText={(values.quantity < 3) && errors.quantity}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form.FormInput
                                label='Valor'
                                type='number'
                                name='value'
                                value={values.value}
                                onChange={handleChange('value')}
                                error={!!errors.value}
                                helperText={(values.value < 3) && errors.value}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <GridComponent justify="flex-start" alignItems="flex-end" spacing={3}>
                                <Grid item xs={12} sm={8} md={2} >
                                    <Span>Data</Span>
                                </Grid>
                                <Grid item xs={12} sm={6} md={5} >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        <Form.DatePicker
                                            label="Início"
                                            value={values.start_time || null}
                                            maxDate={values.end_time}
                                            maxDateMessage="data não pode ser maior que Data de Fim"
                                            onChange={(date: Date) => setFieldValue('start_time', date)}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={6} md={5}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        <Form.DatePicker
                                            minDate={values.start_time}
                                            minDateMessage="data não pode ser menor que Data de Início"
                                            label="Fim"
                                            value={values.end_time || null}
                                            onChange={(date: Date) => setFieldValue('end_time', date)}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </GridComponent>
                        </Grid>
                        <Grid item xs={12}>
                            <Button.ButtonImport onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeImg(setFieldValue, event)} disabled={!!values?._id} />
                            {values.image && <Img src={values.image} alt={`image-store`} borderRadius={12} />}
                        </Grid>
                    </Grid>

                    <Button.ButtonForm link="/loja-virtual" disabled={isSubmitting} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormItem;