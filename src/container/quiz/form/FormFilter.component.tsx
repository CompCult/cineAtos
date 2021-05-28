import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import { GridComponent } from "../../../component/Component";
import FormLabel from '../../../component/input/FormLabel.component';
import { FormInterface } from '../../../core/interfaces/form/Form';
import { InterfacePagination } from '../interface/QuizzesPagination';
import { Validate } from '../utils/Validate';
import { FormInput } from '../../../component/input/InputStyle';

const FormQuizzes = ({ handleSubmitForm, initialValues, request }: FormInterface<InterfacePagination>) => {

    const { handleSubmit, handleChange, values, errors } = useFormik<InterfacePagination>({
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
                        helperText={(values.desc\\\\ription.length < 3) && errors.description}
                    />
                </FormLabel>
                <FormLabel title="Código Secreto" sm={12} md={6} required={true}>
                    <FormInput
                        name='secret_code'
                        value={values.secret_code}
                        onChange={handleChange}
                        error={(values.secret_code.length < 3) && !!errors.secret_code}
                        dhelperText={(values.secret_code.length < 3) && errors.secret_code}
                    />
                </FormLabel>
                <FormLabel title="Lux" sm={12} md={6} required={true}>
                    <FormInput
                        name='lux'
                        type = "number"
                        value={values.lux}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Resources" sm={12} md={6} required={true}>
                    <FormInput
                        name='resources'
                        type = "number"
                        value={values.resources}
                        onChange={handleChange}
                    />
                </FormLabel>
            </GridComponent>
        </form>
    )
}
export default FormQuizzes;

/*    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}  >
            {({ values, handleChange }: FormikProps<Missions>) => (
                <FormikForm>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Título'
                                name='title'
                                value={values.title}
                                onChange={handleChange('title')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form.FormInput
                                label='Lux'
                                type='number'
                                name='lux'
                                value={values.lux || ''}
                                onChange={handleChange('lux')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form.FormInput
                                label='Resources'
                                type='number'
                                name='resources'
                                value={values.resources || ''}
                                onChange={handleChange('resources')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInput
                                label='Código secreto'
                                name='secret_code'
                                value={values.secret_code}
                                onChange={handleChange('secret_code')}
                            />
                        </Grid>
                    </Grid>
                    <Modal.ActionModal title={'Filtrar'} onClick={onClick} />
                </FormikForm>
            )}
        </Formik>
    )
}
*/
