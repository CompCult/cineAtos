import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import {
  ButtomSubmit,
  ButtomImport
} from "../../../../components/buttom/Buttom";
import { RenderTextField, DataPicker } from "../../../../components/form/Form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Validade } from "../Utils/Validade";

const useStyles = makeStyles(theme => ({
  selectedImage: {
    width: "30%",
    height: "30%",
    maxWidth: 100,
    maxHeight: 50,
    marginBottom: 10,
    display: "block"
  }
}));

const Form = ({ initialValues, handleSubmit, handleSelectImage }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Validade}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <FormikForm className="form">
          <Field name="title">
            {({ field, meta }) => (
              <RenderTextField
                {...field}
                touched={meta.touched}
                error={meta.error}
                type="text"
                label="Título do item"
              />
            )}
          </Field>
          <Field name="description">
            {({ field, meta }) => (
              <RenderTextField
                {...field}
                touched={meta.touched}
                error={meta.error}
                type="text"
                label="Descrição do item"
                rows="5"
              />
            )}
          </Field>
          <Field name="quantity">
            {({ field, meta }) => (
              <RenderTextField
                {...field}
                touched={meta.touched}
                error={meta.error}
                type="number"
                label="Quantidade"
              />
            )}
          </Field>
          <Field name="value">
            {({ field, meta }) => (
              <RenderTextField
                {...field}
                touched={meta.touched}
                error={meta.error}
                type="number"
                label="Valor"
              />
            )}
          </Field>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Field name="start_time">
              {({ field, meta }) => (
                <DataPicker
                  {...field}
                  touched={meta.touched}
                  field={field}
                  error={meta.error}
                  onChange={date => setFieldValue("start_time", date)}
                  minData={values.start_time}
                  label="Data de Início"
                />
              )}
            </Field>

            <Field name="end_time">
              {({ field, meta }) => (
                <DataPicker
                  {...field}
                  touched={meta.touched}
                  field={field}
                  error={meta.error}
                  onChange={date => setFieldValue("end_time", date)}
                  minData={values.end_time}
                  label="Data de Fim"
                />
              )}
            </Field>
          </Grid>

          <ButtomImport
            onChange={handleSelectImage}
            title="Escolher imagem para o item"
          />

          {initialValues.image &&
            [initialValues.image].map((obj, index) => {
              values.image = obj;
              return (
                <img
                  className={classes.selectedImage}
                  src={obj}
                  key={index}
                  alt="Imagem Item"
                />
              );
            })}

          <ButtomSubmit
            title={isSubmitting ? "Enviando..." : "Enviar Formulario"}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
