import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import PersonApi from "../PersonApi.js";
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import { RenderTextField, SelectField, RadioButtonTypeSent } from "../../../components/form/Form";
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

function EditPerson({ person }) {
  const [values, setValues] = useState(person);

  const [array] = useState([
    { value: 'professor', label: 'Professor' },
    { value: 'estudante', label: 'Estudante' },
    { value: 'gestor', label: 'Gestor' },
    { value: 'usuarioComum', label: 'Usuário Comum' },
  ])

  const [request, setRequest] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeRadio = name => event => {
    setValues({ ...values, [name]: event.target.value === "true" ? true : false });
  };

  const putPerson = async () => {
    setRequest(true)
    await PersonApi.putPersonApi(values, values._id).then(res => {
      window.location.reload();
      toast.success("Usuário editado com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar usuário");
      setRequest(false)
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
        {(values.type === 'professor') &&
          <Field
            onChange={handleChangeRadio("can_edit")}
            name="can_edit"
            component={RadioButtonTypeSent}
            checked={values.can_edit}
            label="Dar permissão a esse professor ?"
          />
        }
        <ButtomSubmit title={!request ? "Atualizar usuário" : "Atualizando..."} onClick={putPerson} disabled={!request} />
      </form>

    </Card>
  );
}
export default reduxForm({
  form: "MaterialUiFormEditPerson" // a unique identifier for this form
})(EditPerson);
