import React from "react";
import Delete from "../../../components/Delete";
import StoreApi from "../StoreApi";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const DeleteItem = ({ id }) => {
  let history = useHistory();

  const deleteItem = () => {
    StoreApi.deleteItem(id).then(res => {
      history.push("/loja-virtual/todos-itens");
      toast.success("Item deletado com sucesso!");
    });
  };

  return <Delete name={"ese item"} onClick={deleteItem} />;
};

export default DeleteItem;
