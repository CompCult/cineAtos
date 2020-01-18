import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import PersonApi from "../PersonApi.js";
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import { RenderTextField, SelectFieldUpdate } from "../../../components/form/Form";
import MenuItem from "@material-ui/core/MenuItem";
import { TitleEdit } from "../../../components/Title";

function EditPerson({ person }) {
  const [values, setValues] = useState(person);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const putPerson = async () => {
    await PersonApi.putPersonApi(values, values._id)
      .then(res => { })
      .catch(error => {
        console.log(error.response);
      });
    window.location.reload();
  };

  return (
    <form className='form-edit'>
      <TitleEdit title="Atualizar usuário" />
      <Field
        onChange={handleChange("name")}
        name="name"
        component={RenderTextField}
        type="text"
        label="Nome completo"
        valueDefault={values.name} />

      <Field
        onChange={handleChange("email")}
        name="email"
        component={RenderTextField}
        type="email"
        label="Email"
        valueDefault={values.email} />

      <Field
        onChange={handleChange("password")}
        name="password"
        component={RenderTextField}
        type="text"
        label="Senha" />

      <Field
        onChange={handleChange("type")}
        name="type"
        component={SelectFieldUpdate}
        label="Opções"
        valueDefault={values.type}>

        <MenuItem value="professor">Professor</MenuItem>
        <MenuItem value="estudante">Estudante</MenuItem>
        <MenuItem value="gestor">Gestor</MenuItem>
        <MenuItem value="usuarioComum">Usuário Comum</MenuItem>

      </Field>
      {(values.type === 'professor' || values.type === 'estudante') &&
        <Field
          onChange={handleChange("institution")}
          name="institution"
          component={RenderTextField}
          type="text"
          label="Intituição"
          valueDefault={values.institution} />
      }
      <ButtomSubmit title="Atualizar usuário" onClick={putPerson} />
    </form>
  );
}
export default reduxForm({
  form: "MaterialUiFormEditPerson" // a unique identifier for this form
})(EditPerson);
