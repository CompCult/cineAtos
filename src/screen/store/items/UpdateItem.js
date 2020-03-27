import React, { useState } from "react";
import ItemForm from "./componentsItems/ItemForm";
import { useHistory } from "react-router-dom";
import StoreApi from "../StoreApi";
import { toast } from "react-toastify";

const UpdateItem = ({ item }) => {
  StoreApi.getAllOrders().then(res => {
    console.log(res.data)
  })
  const [values, setValues] = useState(item);
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
    await StoreApi.updateItem(event._id, event)
      .then(res => {
        history.push("/loja-virtual/todos-itens");
        toast.success("Item atualizado com sucesso");
      })
      .catch(err => {
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
