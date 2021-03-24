import 'date-fns';
import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import { Button, Progress, Form, GridComponent, Span, CardAccordion } from "../../../component/Component";
import { FormProps } from '../interface/Form';
import { Grid } from '@material-ui/core';
import Missions from '../interface/Missions';
import { Validate } from '../utils/Validate';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const FormMissions = ({ handleSubmit, initialValues, request }: FormProps) => {

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
                                label='Nome'
                                name='name'
                                value={values.name}
                                onChange={handleChange('name')}
                                error={(values.name.length < 3) && !!errors.name}
                                helperText={(values.name.length < 3) && errors.name}
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
                        <Grid item xs={12}>
                            <Form.FormInputMultiline
                                label='Messagem Final'
                                name='end_message'
                                value={values.end_message}
                                onChange={handleChange('end_message')}
                                error={(values.end_message.length < 3) && !!errors.end_message}
                                helperText={(values.end_message.length < 3) && errors.end_message}
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
                            <Form.ContainerRadio>
                                <Form.LabelForm correctHeight>Texto</Form.LabelForm>
                                <Form.FormRadio name='has_text' value={values.has_text} onChange={handleChange('has_text')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.has_text === true || values.has_text === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.has_text === false || values.has_text === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm maxWidth={48}>Imagem</Form.LabelForm>
                                <Form.FormRadio name='has_image' value={values.has_image} onChange={handleChange('has_image')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.has_image === true || values.has_image === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.has_image === false || values.has_image === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm>Áudio</Form.LabelForm>
                                <Form.FormRadio name='has_audio' value={values.has_audio} onChange={handleChange('has_audio')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.has_audio === true || values.has_audio === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.has_audio === false || values.has_audio === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm correctHeight>Vídeo</Form.LabelForm>
                                <Form.FormRadio name='has_video' value={values.has_video} onChange={handleChange('has_video')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.has_video === true || values.has_video === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.has_video === false || values.has_video === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm maxWidth={88}>Geolocalização</Form.LabelForm>
                                <Form.FormRadio name='has_geolocation' value={values.has_geolocation} onChange={handleChange('has_geolocation')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.has_geolocation === true || values.has_geolocation === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.has_geolocation === false || values.has_geolocation === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
                        </Grid>
                        <Grid item xs={12}>
                            <Form.ContainerRadio>
                                <Form.LabelForm maxWidth={110}>Empreendedorismo</Form.LabelForm>
                                <Form.FormRadio name='isEntrepreneurial' value={values.isEntrepreneurial} onChange={handleChange('isEntrepreneurial')}>
                                    <Form.FormControlRadio
                                        value={true}
                                        checked={values.isEntrepreneurial === true || values.isEntrepreneurial === 'true'}
                                        label='Sim'
                                    />
                                    <Form.FormControlRadio
                                        value={false}
                                        checked={values.isEntrepreneurial === false || values.isEntrepreneurial === 'false'}
                                        label='Não'
                                    />
                                </Form.FormRadio>
                            </Form.ContainerRadio>
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
                                        <Form.LabelForm>Grupo</Form.LabelForm>
                                        <Form.FormRadio name='is_grupal' value={values.is_grupal} onChange={handleChange('is_grupal')}>
                                            <Form.FormControlRadio
                                                value={true}
                                                checked={values.is_grupal === true || values.is_grupal === 'true'}
                                                label='Resposta em Grupo'
                                            />
                                            <Form.FormControlRadio
                                                value={false}
                                                checked={values.is_grupal === false || values.is_grupal === 'false'}
                                                label='Resposta Individual'
                                            />
                                        </Form.FormRadio>
                                    </Form.ContainerRadio>
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.ContainerRadio>
                                        <Form.LabelForm maxWidth={67} correctHeight>Único envio</Form.LabelForm>
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

                    <Button.ButtonForm link="/missoes/minhas-missoes" disabled={isSubmitting} />
                </FormikForm>
            )}
        </Formik>
    )
}
export default FormMissions;