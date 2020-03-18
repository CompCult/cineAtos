import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { Title } from "../../../components/Title";
import Form from "./componentsItems/ItemForm";

const INITIAL_VALUES = {
  title: "",
  description: "",
  quantity: 0,
  value: 0,
  start_time: new Date(),
  end_time: new Date(),
  image: ""
};

const CreateItem = () => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSelectImage = event => {
    const reader = new FileReader();
    const { files } = event.target;
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result });
    }
  };

  const handleSubmit = event => {
    console.log(event);
  };

  return (
    <Card
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 90,
        marginBottom: "2%"
      }}
    >
      <Title title="Adicionar Item" />
      <Form
        initialValues={values}
        handleSubmit={handleSubmit}
        handleSelectImage={handleSelectImage}
      />
    </Card>
  );
};

export default CreateItem;
