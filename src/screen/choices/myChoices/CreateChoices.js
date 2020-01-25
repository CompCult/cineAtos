import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import ChoicesApi from "../ChoicesApi.js";
import { ButtomAdvancedOptions, ButtomSubmit } from "../../../components/buttom/Buttom";
import MenuItem from "@material-ui/core/MenuItem";
import {
  DataPicker,
  RenderTextField,
  SelectField,
  RadioButtonType
} from "../../../components/form/Form";
import { useHistory } from "react-router-dom";
import { TitleEdit } from "../../../components/Title";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';

var buttonSubmitValidate = false;

const validate = values => {
  const errors = {};
  const requiredFields = [
    "title",
    "description",
    "points",
    "alternative_a",
    "alternative_b",
    "alternative_c",
    "alternative_d",
    "alternative_e",
    "correct_answer"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Campo não pode ser vazio";
    }
  });

  buttonSubmitValidate = Object.keys(errors).length === 0 ? true : false;
  return errors;
};

function CreateChoicesForm() {
  let history = useHistory();
  const [values, setValues] = useState({
    title: "",
    description: "",
    points: 0,
    is_public: true,
    single_answer: true,
    start_time: new Date(),
    end_time: new Date(),
    alternative_a: "",
    alternative_b: "",
    alternative_c: "",
    alternative_d: "",
    alternative_e: "",
    correct_answer: ""
  });

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

  const postCreateChoices = async event => {
    event.preventDefault();
    await ChoicesApi.postChoicesApi(values)
      .then(res => { })
      .catch(error => {
        console.log(error.response);
      });
    setTimeout(() => history.replace("/quiz/meus-quizes"), 10);
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
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%', marginBottom: '2%' }}>
      <TitleEdit title="Adicionar quizz" />
      <form className='form' onSubmit={postCreateChoices}>
        <Field
          onChange={handleChange("title")}
          name="title"
          component={RenderTextField}
          type="text"
          label="Título"
        />
        <Field
          onChange={handleChange("description")}
          name="description"
          component={RenderTextField}
          type="text"
          label="Descrição"
        />
        <Field
          onChange={handleChange("points")}
          name="points"
          component={RenderTextField}
          type="number"
          label="Pontos"
        />
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Field
            onChange={handleChange("start_time")}
            name="start_time"
            component={DataPicker}
            label={"Data de Início"}
            selectedDate={values.start_time}
          />
          <Field
            onChange={handleChange("end_time")}
            name="end_time"
            component={DataPicker}
            label={"Data de Fim"}
            minData={values.start_time}
            selectedDate={values.end_time}
          />
        </Grid>
        <Field
          onChange={handleChange("alternative_a")}
          name="alternative_a"
          component={RenderTextField}
          type="text"
          label="Alternativa A"
        />
        <Field
          onChange={handleChange("alternative_b")}
          name="alternative_b"
          component={RenderTextField}
          type="text"
          label="Alternativa B"
        />
        <Field
          onChange={handleChange("alternative_c")}
          name="alternative_c"
          component={RenderTextField}
          type="text"
          label="Alternativa C"
        />
        <Field
          onChange={handleChange("alternative_d")}
          name="alternative_d"
          component={RenderTextField}
          type="text"
          label="Alternativa D"
        />
        <Field
          onChange={handleChange("alternative_e")}
          name="alternative_e"
          component={RenderTextField}
          type="text"
          label="Alternativa E"
        />

        <Field
          onChange={handleChange("correct_answer")}
          name="correct_answer"
          component={SelectField}
          type="text"
          erro={values.correct_answer === ""}
          label="Alternativa Correta"
        >
          <MenuItem value="a">A</MenuItem>
          <MenuItem value="b">B</MenuItem>
          <MenuItem value="c">C</MenuItem>
          <MenuItem value="d">D</MenuItem>
          <MenuItem value="e">E</MenuItem>
        </Field>
        <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />

        {openAdvancedOptions && advancedOptions}

        <ButtomSubmit title="Cadastrar quizz" disabled={!buttonSubmitValidate} />
      </form>

    </Card>
  );
}
export default reduxForm({
  form: "MaterialUiFormChoices", // a unique identifier for this form
  validate
})(CreateChoicesForm);
