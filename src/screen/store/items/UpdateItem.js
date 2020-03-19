import React, { useState } from "react";
import ItemForm from "./componentsItems/ItemForm";
import { useHistory } from "react-router-dom";
import StoreApi from "../StoreApi";
import { toast } from "react-toastify";

const UpdateItem = ({ item }) => {
  const {
    title,
    description,
    quantity,
    value,
    image
  } = item;


  const [values, setValues] = useState({
    title,
    description,
    quantity,
    start_time: new Date(item.start_time),
    end_time: new Date(item.end_time),
    value,
    image
  });

  let history = useHistory();

  const handleSelectImage = event => {
    const reader = new FileReader();
    const { files } = event.target;
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result });
    };
  };

  const handleSubmit = async event => {
    console.log(event)
    await StoreApi.updateItem(event._id, event)
      .then(res => {
        history.push("/loja-virtual/todos-itens");
        toast.success("Item atualizado com sucesso");
      })
      .catch(err => {
        console.log(err);
        toast.error("Erro ao atualizar o item");
      });
  };

  return (
    <ItemForm
      initialValues={values}
      handleSubmit={handleSubmit}
      handleSelectImage={handleSelectImage}
    />
  );
};

export default UpdateItem;
