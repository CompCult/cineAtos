import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import { GridComponent } from "../../../component/Component";
import FormLabel from '../../../component/input/FormLabel.component';
import { FormInterface } from '../../../interfaces/form/Form';
import { InterfacePagination } from '../interface/QuizzesPagination';
import { Validate } from '../utils/Validate';
import { FormInput } from '../../../component/input/InputStyle';

const FormQuizzes = ({ handleSubmitForm, initialValues }: FormInterface<InterfacePagination>) => {

    const { handleSubmit, handleChange, values } = useFormik<InterfacePagination>({
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
                    />
                </FormLabel>
                <FormLabel title="Descrição" sm={12} md={6} required={true}>
                    <FormInput
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Código Secreto" sm={12} md={6} required={true}>
                    <FormInput
                        name='secret_code'
                        value={values.secret_code}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Lux" sm={12} md={6} required={true}>
                    <FormInput
                        name='lux'
                        type="number"
                        value={values.lux}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel title="Resources" sm={12} md={6} required={true}>
                    <FormInput
                        name='resources'
                        type="number"
                        value={values.resources}
                        onChange={handleChange}
                    />
                </FormLabel>
            </GridComponent>
        </form>
    )
}
export default FormQuizzes;