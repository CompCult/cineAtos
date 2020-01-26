import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import ChoicesApi from "../ChoicesApi.js";
import { ButtomAdvancedOptions, ButtomSubmit } from "../../../components/buttom/Buttom";
import {
  DataPicker,
  RenderTextField,
  RadioButtonType,
  SelectField
} from "../../../components/form/Form";
import Grid from "@material-ui/core/Grid";
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

function EditQuiz({ quiz }) {
  const [values, setValues] = useState(quiz);
  const [openAdvancedOptions, setAdvancedOptions] = useState(false);
  const [request, setRequest] = useState(false);

  const [array] = useState([
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
    { value: 'd', label: 'D' },
    { value: 'e', label: 'E' },
  ]);

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
    setRequest(true)
    await ChoicesApi.putChoicesApi(values, values._id).then(res => {
      window.location.reload();
      toast.success("Quizz editado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar Quizz");
      setRequest(false)
    });
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
      <Title title="Atualizar quizz" />
      <form className='form'>
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

        <Field onChange={handleChange('correct_answer')} name="correct_answer" component={SelectField} label="Alternativa Correta" valueDefault={values.correct_answer} erro={values.correct_answer === ''} array={array} />

        <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />

        {openAdvancedOptions && advancedOptions}

        <ButtomSubmit title={!request ? "Atualizar quizz" : "Atualizando..."} onClick={putChoice} disabled={!request} />
      </form >
    </Card>
  );
}
export default reduxForm({
  form: "MaterialUiFormEditQuiz" // a unique identifier for this form
})(EditQuiz);
