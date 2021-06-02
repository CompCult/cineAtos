import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import { Button, Progress, GridComponent, Span, Img } from "../../../component/Component";
import { DatePicker,FormInput} from '../../../component/input/InputStyle';
import FormLabel from '../../../component/input/FormLabel.component';
import Item from '../interface/Item';
import { Validate } from '../utils/Validate';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormInterface } from '../../../interfaces/form/Form';


const FormItem = ({ handleSubmitForm, initialValues, request }: FormInterface<Item>) => {

    if (request) {
        return <Progress open={request} />
    }

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik<Item>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: valuesSubimit => {
            handleSubmitForm(valuesSubimit);
        },
    });

    return ( 
    <form onSubmit={handleSubmit}>
        <GridComponent justify='flex-start' spacing={3}>
            <FormLabel title="Título" sm={12} md={6} required={true}>
                <FormInput
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                    error={(values.title.length < 3) && !!errors.title}
                    helperText={(values.title.length < 3) && errors.title}
                />
            </FormLabel>
            <FormLabel title="Descrição" sm={12} md={6} required={true}>
                <FormInput
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                    error={(values.description.length < 3) && !!errors.description}
                    helperText={(values.description.length < 3) && errors.description}
                />
            </FormLabel>
            <FormLabel title="Quantidade" sm={12} md={6} required={true}>
                <FormInput
                    name='quantity'
                    type="number"
                    value={values.quantity}
                    onChange={handleChange}
                />
            </FormLabel>
            <FormLabel title="Valor" sm={12} md={6} required={true}>
                <FormInput
                    name='value'
                    type="number"
                    value={values.value}
                    onChange={handleChange}
                />
            </FormLabel>
            <FormLabel title="Inicio" sm={6} md={6} required={true}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <DatePicker
                        value={values.start_time || null}
                        maxDateMessage="data não pode ser maior que Data de Fim"
                        maxDate={values.end_time || null}
                        onChange={(date: Date) => setFieldValue('start_time', date)}
                    />
                </MuiPickersUtilsProvider>
            </FormLabel>
            <FormLabel title="Fim" sm={6} md={6} required={true}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <DatePicker
                        value={values.end_time || null}
                        minDateMessage="data não pode ser menor que Data de Início"
                        minDate={values.start_time || null}
                        onChange={(date: Date) => setFieldValue('end_time', date)}
                    />
                </MuiPickersUtilsProvider>
            </FormLabel>
        </GridComponent>
        <Button.ButtonForm link="/loja-virtual" disabled={request} />
    </form>
)
}
export default FormItem;

        /*
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
export default FormItem;*/