import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import MissionsApi from "../MissionsApi.js";
import Button from "@material-ui/core/Button";
import {
  DataPicker,
  RenderTextField,
  RadioButtonType,
  RadioButtonTypeSent
} from "../../../components/form/Form";
import Grid from "@material-ui/core/Grid";
import { TitleEdit } from "../../../components/Title";

function EditMission({ mission }) {
  const [values, setValues] = useState(mission);
  const [openAdvancedOptions, setAdvancedOptions] = useState(false);

  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions);
  }

  const handleChange = name => event => {
    if (name === "start_time" || name === "end_time") {
      setValues({ ...values, [name]: event });
    } else if (
      name === "is_public" ||
      name === "single_answer" ||
      name === "is_grupal" ||
      name === "has_image" ||
      name === "has_video" ||
      name === "has_text" ||
      name === "has_audio" ||
      name === "has_geolocation"
    ) {
      setValues({
        ...values,
        [name]: event.target.value === "true" ? true : false
      });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const putMission = async () => {

    await MissionsApi.putMissionApi(values, values._id)
      .then(res => { })
      .catch(error => {
        console.log(error.response);
      });
    window.location.reload();
  };

  const advancedOptions = (
    <Fragment>
      <Field
        onChange={handleChange('is_public')}
        name="is_public"
        component={RadioButtonType}
        checked={values.is_public}
        label="Visibilidade"
        FormControlLabelOne="Público"
        FormControlLabelTwo="Privado" />

      <Field
        onChange={handleChange('is_grupal')}
        name="is_grupal"
        component={RadioButtonType}
        checked={values.is_grupal}
        label="Grupo"
        FormControlLabelOne="Resposta Individual"
        FormControlLabelTwo="Resposta em grupo" />

      <Field
        onChange={handleChange('single_answer')}
        name="single_answer"
        component={RadioButtonType}
        checked={values.single_answer}
        label="Único envio"
        FormControlLabelOne="Uma única resposta pode ser enviada"
        FormControlLabelTwo="Várias respostas podem ser enviadas" />
    </Fragment>
  );

  const options = (
    <Fragment>
      <Field
        onChange={handleChange("has_image")}
        name="has_image"
        component={RadioButtonTypeSent}
        checked={values.has_image}
        label="Imagem"
      />
      <Field
        onChange={handleChange("has_text")}
        name="has_text"
        component={RadioButtonTypeSent}
        checked={values.has_text}
        label="Texto"
      />
      {/*
            <Field onChange={handleChange('has_video')} name="has_video" component={RadioButtonTypeSent} checked={values.has_video} label="Vídeo" />
            <Field onChange={handleChange('has_audio')} name="has_audio" component={RadioButtonTypeSent} checked={values.has_audio} label="Áudio" />
            <Field onChange={handleChange('has_geolocation')} name="has_geolocation" component={RadioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização" />
            */}
    </Fragment>
  );

  return (
    <form className='form-edit'>
      <TitleEdit title="Atualizar missões" />
      <Field
        onChange={handleChange("name")}
        name="name"
        component={RenderTextField}
        type="text"
        label="Nome"
        valueDefault={values.name}
      />
      <Field
        onChange={handleChange("description")}
        name="description"
        component={RenderTextField}
        type="text"
        label="Descrição"
        valueDefault={values.description}
      />

      <Field
        onChange={handleChange("end_message")}
        name="end_message"
        component={RenderTextField}
        type="text"
        label="Mensagem Final"
        valueDefault={values.end_message}
      />

      <Field
        onChange={handleChange("points")}
        name="points"
        component={RenderTextField}
        type="number"
        label="Pontos"
        valueDefault={values.points}
      />

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Field
          onChange={handleChange("start_time")}
          name="start_time"
          component={DataPicker}
          label={"Data de Início"}
          selectedDate={values.start_time}
          disablePast={false}
        />
        <Field
          onChange={handleChange("end_time")}
          name="end_time"
          component={DataPicker}
          label={"Data de Fim"}
          minData={values.start_time}
          selectedDate={values.end_time}
          disablePast={false}
        />
      </Grid>

      {options}

      <div id="marginForm">
        <Button variant="contained" color="primary" onClick={handleClickAdvancedOptions}>
          Opções Avançadas
        </Button>
      </div>
      {openAdvancedOptions && advancedOptions}

      <Button variant="contained" color="primary" onClick={putMission}>
        Atualizar
      </Button>
    </form>

  );
}
export default reduxForm({
  form: "MaterialUiFormEditMission" // a unique identifier for this form
})(EditMission);
