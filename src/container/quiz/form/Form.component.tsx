import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form, GridComponent, Span, CardAccordion } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid, FormControl, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import Missions from '../interface/Quizzes';
import { Validate } from '../utils/Validate';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { HeadCell } from '../../../component/table/interfaces/TableInterface';
import { CORRECT_ANSWER } from '../utils/CORRECT_ANSWER';

const FormQuizzes = ({ handleSubmit, initialValues, request }: FormProps) => {

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Validate} validateOnChange={false} >
            {({ values, handleChange, errors, setFieldValue, isSubmitting }: FormikProps<Missions>) => (
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
                            <Form.FormInputMultiline
                                label='Alternativa A'
                                name='alternative_a'
                                value={values.alternative_a}
                                onChange={handleChange('alternative_a')}
                                error={(values.alternative_a.length < 3) && !!errors.alternative_a}
                                helperText={(values.alternative_a.length < 3) && errors.alternative_a}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInputMultiline
                                label='Alternativa B'
                                name='alternative_b'
                                value={values.alternative_b}
                                onChange={handleChange('alternative_b')}
                                error={(values.alternative_b.length < 3) && !!errors.alternative_b}
                                helperText={(values.alternative_b.length < 3) && errors.alternative_b}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInputMultiline
                                label='Alternativa C'
                                name='alternative_c'
                                value={values.alternative_c}
                                onChange={handleChange('alternative_c')}
                                error={(values.alternative_c.length < 3) && !!errors.alternative_c}
                                helperText={(values.alternative_c.length < 3) && errors.alternative_c}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInputMultiline
                                label='Alternativa D'
                                name='alternative_d'
                                value={values.alternative_d}
                                onChange={handleChange('alternative_d')}
                                error={(values.alternative_d.length < 3) && !!errors.alternative_d}
                                helperText={(values.alternative_d.length < 3) && errors.alternative_d}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.FormInputMultiline
                                label='Alternativa E'
                                name='alternative_e'
                                value={values.alternative_e}
                                onChange={handleChange('alternative_e')}
                                error={(values.alternative_e.length < 3) && !!errors.alternative_e}
                                helperText={(values.alternative_e.length < 3) && errors.alternative_e}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <FormControl variant="outlined" fullWidth error={!values.correct_answer && !!errors.correct_answer} >
                                <InputLabel id="correctAnswer">Alternatica Correta</InputLabel>
                                <Form.FormSelect
                                    label='Alternatica Correta'
                                    name='correct_answer'
                                    value={values.correct_answer}
                                    onChange={handleChange('correct_answer')}
                                >
                                    {CORRECT_ANSWER.map((correctAnswer: HeadCell, index: number) => {
                                        return <MenuItem value={correctAnswer.id || index} key={index}>{correctAnswer.label}</MenuItem>
                                    })}
                                </Form.FormSelect>
                                <FormHelperText>{!values.correct_answer && errors.correct_answer}</FormHelperText>
                            </FormControl>
                        </Grid>

                        <CardAccordion title="Configurações Avançadas">
                            <>
                                <Grid item xs={12}>
                                    <Form.ContainerRadio>
                                        <Form.LabelForm maxWidth={66} correctHeight>Visibilidade</Form.LabelForm>
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
                                    <Form.ContainerRadio>
                                        <Form.LabelForm maxWidth={67} >Único envio</Form.LabelForm>
                                        <Form.FormRadio name='single_answer' value={values.single_answer} onChange={handleChange('single_answer')}>
                                            <Form.FormControlRadio
                                                value={true}
                                                checked={values.single_answer === true || values.single_answer === 'true'}
                                                label='Uma única resposta pode ser enviada'
                                            />
                                            <Form.FormControlRadio
                                                value={false}
                                                checked={values.single_answer === false || values.single_answer === 'false'}
                                                label='Várias respostas podem ser enviadas'
                                            />
                                        </Form.FormRadio>
                                    </Form.ContainerRadio>
                                </Grid>
                            </>
                        </CardAccordion>
                    </Grid>
                    <Button.ButtonForm link="/quizzes/meus-quizzes" disabled={isSubmitting} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormQuizzes;