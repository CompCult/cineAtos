import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import PersonApi from "../PersonApi.js";
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import { RenderTextField, SelectField } from "../../../components/form/Form";
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';

function EditPerson({ person }) {
  const [values, setValues] = useState(person);

  const [array] = useState([
    { value: 'professor', label: 'Professor' },
    { value: 'estudante', label: 'Estudante' },
    { value: 'gestor', label: 'Gestor' },
    { value: 'usuarioComum', label: 'Usuário Comum' },
  ])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const putPerson = async () => {
    await PersonApi.putPersonApi(values, values._id)
      .then(res => { window.location.reload(); })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
      <Title title="Atualizar usuário" />
      <form className='form'>
        <Field onChange={handleChange("name")}
          name="name"
          component={RenderTextField}
          type="text"
          label="Nome completo"
          valueDefault={values.name} />

        <Field onChange={handleChange("email")}
          name="email"
          component={RenderTextField}
          type="email"
          label="Email"
          valueDefault={values.email} />

        <Field onChange={handleChange("password")}
          name="password"
          component={RenderTextField}
          type="text"
          label="Senha" />

        <Field onChange={handleChange('type')} name="type" component={SelectField} label="Opções" valueDefault={values.type} erro={values.type === ''} array={array} />

        {(values.type === 'professor' || values.type === 'estudante') &&
          <Field onChange={handleChange("institution")}
            name="institution"
            component={RenderTextField}
            type="text"
            label="Intituição"
            valueDefault={values.institution} />
        }
        <ButtomSubmit title="Atualizar usuário" onClick={putPerson} />
      </form>

    </Card>
  );
}
export default reduxForm({
  form: "MaterialUiFormEditPerson" // a unique identifier for this form
})(EditPerson);
