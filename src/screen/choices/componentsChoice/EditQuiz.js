import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import ChoicesApi from "../ChoicesApi.js";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {
  DataPicker,
  RenderTextField,
  RadioButtonType,
  SelectFieldUpdate
} from "../../../components/form/Form";
import Grid from "@material-ui/core/Grid";
import { TitleEdit } from "../../../components/Title";

function EditQuiz({ quiz }) {
  const [values, setValues] = useState(quiz);
  const [openAdvancedOptions, setAdvancedOptions] = useState(false);

  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions);
  }

  const handleChange = name => event => {
    if (name === "start_time" || name === "end_time") {
      setValues({ ...values, [name]: event });
    } else if (name === "is_public" || name === "single_answer") {
      setValues({
        ...values,
        [name]: event.target.value === "true" ? true : false
      });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const putChoice = async () => {
    await ChoicesApi.putChoicesApi(values, values._id)
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
        onChange={handleChange('single_answer')}
        name="single_answer"
        component={RadioButtonType}
        checked={values.single_answer}
        label="Único envio"
        FormControlLabelOne="Uma única resposta pode ser enviada"
        FormControlLabelTwo="Várias respostas podem ser enviadas" />
    </Fragment>
  );

  return (
    <form className='form-edit'>
      <TitleEdit title="Atualizar quizz" />
      <Field
        onChange={handleChange("title")}
        name="title"
        component={RenderTextField}
        type="text"
        label="Título"
        valueDefault={values.title}
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
        onChange={handleChange("points")}
        name="points"
        component={RenderTextField}
        type="number"
        label="Pontos"
        valueDefault={values.points}
      />

      <Grid container direction="row" justify="space-between" alignItems="flex-start">
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

      <Field
        onChange={handleChange("alternative_a")}
        name="alternative_a"
        component={RenderTextField}
        type="text"
        label="Alternativa A"
        valueDefault={values.alternative_a}
      />
      <Field
        onChange={handleChange("alternative_b")}
        name="alternative_b"
        component={RenderTextField}
        type="text"
        label="Alternativa B"
        valueDefault={values.alternative_b}
      />
      <Field
        onChange={handleChange("alternative_c")}
        name="alternative_c"
        component={RenderTextField}
        type="text"
        label="Alternativa C"
        valueDefault={values.alternative_c}
      />
      <Field
        onChange={handleChange("alternative_d")}
        name="alternative_d"
        component={RenderTextField}
        type="text"
        label="Alternativa D"
        valueDefault={values.alternative_d}
      />
      <Field
        onChange={handleChange("alternative_e")}
        name="alternative_e"
        component={RenderTextField}
        type="text"
        label="Alternativa E"
        valueDefault={values.alternative_e}
      />

      <Field
        onChange={handleChange("correct_answer")}
        name="correct_answer"
        component={SelectFieldUpdate}
        type="text"
        label="Alternativa Correta"
        valueDefault={values.correct_answer}
      >
        <MenuItem value="a">A</MenuItem>
        <MenuItem value="b">B</MenuItem>
        <MenuItem value="c">C</MenuItem>
        <MenuItem value="d">D</MenuItem>
        <MenuItem value="e">E</MenuItem>
      </Field>
      <div id="marginForm">
        <Button variant="contained" color="primary" onClick={handleClickAdvancedOptions}>
          Opções Avançadas
        </Button>
      </div>
      {openAdvancedOptions && advancedOptions}

      <Button variant="contained" color="primary" onClick={putChoice}>
        Atualizar
      </Button>
    </form >
  );
}
export default reduxForm({
  form: "MaterialUiFormEditQuiz" // a unique identifier for this form
})(EditQuiz);
