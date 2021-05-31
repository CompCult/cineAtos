import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import { Button } from "../../../component/Component";
import { MenuItem, FormHelperText, Select } from '@material-ui/core';
import { Validate } from '../utils/Validate';
import { FormInterface } from '../../../interfaces/form/Form';
import GridComponent from '../../../component/grid/GridComponent.component';
import FormLabel from '../../../component/input/FormLabel.component';
import { DatePicker, FormControlRadio, FormInput, FormInputMultiline, FormRadio, FormSelect } from '../../../component/input/InputStyle';
import Quizzes from '../interface/Quizzes';
import { HeadCell } from '../../../component/table/interfaces/TableInterface';
import { CORRECT_ANSWER } from '../utils/CORRECT_ANSWER';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const FormQuizzes = ({ handleSubmitForm, initialValues, request }: FormInterface<Quizzes>) => {

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik<Quizzes>({
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
                <FormLabel title="Alternativa A" sm={12} md={12} required={true}>
                    <FormInputMultiline
                        name='alternative_a'
                        value={values.alternative_a}
                        onChange={handleChange}
                        error={(values.alternative_a.length < 3) && !!errors.alternative_a}
                        helperText={(values.alternative_a.length < 3) && errors.alternative_a}
                    />
                </FormLabel>
                <FormLabel title="Alternativa B" sm={12} md={12} required={true}>
                    <FormInputMultiline
                        name='alternative_b'
                        value={values.alternative_b}
                        onChange={handleChange}
                        error={(values.alternative_b.length < 3) && !!errors.alternative_b}
                        helperText={(values.alternative_b.length < 3) && errors.alternative_b}
                    />
                </FormLabel>
                <FormLabel title="Alternativa C" sm={12} md={12} required={true}>
                    <FormInputMultiline
                        name='alternative_c'
                        value={values.alternative_c}
                        onChange={handleChange}
                        error={(values.alternative_c.length < 3) && !!errors.alternative_c}
                        helperText={(values.alternative_c.length < 3) && errors.alternative_c}
                    />
                </FormLabel>
                <FormLabel title="Alternativa D" sm={12} md={12} required={true}>
                    <FormInputMultiline
                        name='alternative_d'
                        value={values.alternative_d}
                        onChange={handleChange}
                        error={(values.alternative_d.length < 3) && !!errors.alternative_d}
                        helperText={(values.alternative_d.length < 3) && errors.alternative_d}
                    />
                </FormLabel>
                <FormLabel title="Alternativa E" sm={12} md={12} required={true}>
                    <FormInputMultiline
                        name='alternative_e'
                        value={values.alternative_e}
                        onChange={handleChange}
                        error={(values.alternative_e.length < 3) && !!errors.alternative_e}
                        helperText={(values.alternative_e.length < 3) && errors.alternative_e}
                    />
                </FormLabel>
                <FormLabel title="Alternativa Correta" sm={12} md={6} required={true}>
                    <Select
                        name='correct_answer'
                        value={values.correct_answer}
                        input={<FormSelect />}
                        onChange={handleChange}
                    >
                        {CORRECT_ANSWER.map((correctAnswer: HeadCell, index: number) => {
                            return <MenuItem value={correctAnswer.id || index} key={index}>{correctAnswer.label}</MenuItem>
                        })}
                    </Select>
                    <FormHelperText>{(values.correct_answer.length < 1) && errors.correct_answer}</FormHelperText>
                </FormLabel>
                <FormLabel title="Visibilidade" sm={12} md={6} required={true}>
                    <FormRadio name='is_public' value={values.is_public} onChange={handleChange('is_public')}>
                        <FormControlRadio
                            value={true}
                            checked={values.is_public === true || values.is_public === 'true'}
                            label='Público'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.is_public === false || values.is_public === 'false'}
                            label='Privado'
                        />
                    </FormRadio>
                </FormLabel>
            </GridComponent>
            <Button.ButtonForm link="/quiz" disabled={request} />
        </form>
    )
}
export default FormQuizzes;
