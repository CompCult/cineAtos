import 'date-fns';
import React from 'react';
import {useFormik } from 'formik';
import { Button, Progress, Form, GridComponent, Span, CardAccordion } from "../../../component/Component";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Missions from '../interface/Missions';
import FormLabel from '../../../component/input/FormLabel.component';
import { Validate } from '../utils/Validate';
import { DatePicker, FormControlRadio, FormInput, FormInputMultiline, FormRadio, FormSelect } from '../../../component/input/InputStyle';
import DateFnsUtils from '@date-io/date-fns';
import { FormInterface } from '../../../interfaces/form/Form';

const FormMissions = ({ handleSubmitForm, initialValues, request }: FormInterface<Missions>) => {

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik<Missions>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: valuesSubimit => {
            handleSubmitForm(valuesSubimit);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <GridComponent justify='flex-start' spacing={3}>
                <FormLabel title="Nome" sm={12} md={6} required={true}>
                    <FormInput
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        error={(values.name.length < 3) && !!errors.name}
                        helperText={(values.name.length < 3) && errors.name}
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
                <FormLabel title="Messagem Final" sm={12} md={6} required={true}>
                    <FormInput
                        name='end_message'
                        value={values.end_message}
                        onChange={handleChange}
                        error={(values.end_message.length < 3) && !!errors.end_message}
                        helperText={(values.end_message.length < 3) && errors.end_message}
                    />
                </FormLabel>
                <FormLabel title="Lux" sm={12} md={6} required={true}>
                    <FormInput
                        type='number'
                        name='lux'
                        value={values.lux}
                        onChange={handleChange('lux')}
                        error={!!errors.lux}
                        helperText={(values.lux < 3) && errors.lux}
                    />
                </FormLabel>
                <FormLabel title="Resources" sm={12} md={6} required={true}>
                    <FormInput
                        type='number'
                        name='resources'
                        value={values.resources}
                        onChange={handleChange('resources')}
                        error={!!errors.resources}
                        helperText={(values.resources < 3) && errors.resources}
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

                <FormLabel title="Texto" sm={12} md={6} required={true}>
                    <FormRadio name='has_text' value={values.is_public} onChange={handleChange('has_text')}>
                        <FormControlRadio
                            value={true}
                            checked={values.has_text === true || values.has_text === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.has_text === false || values.has_text === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <FormLabel title="Imagem" sm={12} md={6} required={true}>
                    <FormRadio name='has_image' value={values.is_public} onChange={handleChange('has_image')}>
                        <FormControlRadio
                            value={true}
                            checked={values.has_image === true || values.has_image === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.has_image === false || values.has_image === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <FormLabel title="Áudio" sm={12} md={6} required={true}>
                    <FormRadio name='has_audio' value={values.is_public} onChange={handleChange('has_audio')}>
                        <FormControlRadio
                            value={true}
                            checked={values.has_audio === true || values.has_audio === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.has_audio === false || values.has_audio === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <FormLabel title="Vídeo" sm={12} md={6} required={true}>
                    <FormRadio name='has_video' value={values.is_public} onChange={handleChange('has_video')}>
                        <FormControlRadio
                            value={true}
                            checked={values.has_video === true || values.has_video === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.has_video === false || values.has_video === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <FormLabel title="Geolocalização" sm={12} md={6} required={true}>
                    <FormRadio name='has_geolocation' value={values.is_public} onChange={handleChange('has_geolocation')}>
                        <FormControlRadio
                            value={true}
                            checked={values.has_geolocation === true || values.has_geolocation === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.has_geolocation === false || values.has_geolocation === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <FormLabel title="Empreendedorismo" sm={12} md={6} required={true}>
                    <FormRadio name='isEntrepreneurial' value={values.is_public} onChange={handleChange('isEntrepreneurial')}>
                        <FormControlRadio
                            value={true}
                            checked={values.isEntrepreneurial === true || values.isEntrepreneurial === 'true'}
                            label='Sim'
                        />
                        <FormControlRadio
                            value={false}
                            checked={values.isEntrepreneurial === false || values.isEntrepreneurial === 'false'}
                            label='Não'
                        />
                    </FormRadio>
                </FormLabel>
                <CardAccordion title="Configurações Avançadas">
                    <>
                        <FormLabel title="Visibilidade" sm={12} md={6} required={true}>
                            <FormRadio name='is_public' value={values.is_public} onChange={handleChange('isEntrepreneurial')}>
                                <FormControlRadio
                                    value={true}
                                    checked={values.is_public === true || values.is_public === 'true'}
                                    label='Sim'
                                />
                                <FormControlRadio
                                    value={false}
                                    checked={values.is_public === false || values.is_public === 'false'}
                                    label='Não'
                                />
                            </FormRadio>
                        </FormLabel>
                        <FormLabel title="Grupo" sm={12} md={6} required={true}>
                            <FormRadio name='is_grupal' value={values.is_grupal} onChange={handleChange('isEntrepreneurial')}>
                                <FormControlRadio
                                    value={true}
                                    checked={values.is_grupal === true || values.is_grupal === 'true'}
                                    label='Sim'
                                />
                                <FormControlRadio
                                    value={false}
                                    checked={values.is_grupal === false || values.is_grupal === 'false'}
                                    label='Não'
                                />
                            </FormRadio>
                        </FormLabel>
                        <FormLabel title="Único envio" sm={12} md={6} required={true}>
                            <FormRadio name='single_answer' value={values.single_answer} onChange={handleChange('isEntrepreneurial')}>
                                <FormControlRadio
                                    value={true}
                                    checked={values.single_answer === true || values.single_answer === 'true'}
                                    label='Sim'
                                />
                                <FormControlRadio
                                    value={false}
                                    checked={values.single_answer === false || values.single_answer === 'false'}
                                    label='Não'
                                />
                            </FormRadio>
                        </FormLabel>
                    </>
                </CardAccordion>
            </GridComponent>
            <Button.ButtonForm link="/missoes/minhas-missoes" disabled={request} />
        </form>
    )
}
export default FormMissions;

/*
                            
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
export default FormMissions;*/