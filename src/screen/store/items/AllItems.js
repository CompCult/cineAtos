import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import { TitleTableAdd } from "../../../components/Title";
import StoreApi from "../StoreApi";
import { Link } from "react-router-dom";
import ItemCard from "../../../components/ItemCard";
import OrderCard from "../../../components/OrderCard";

const AllItems = () => {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    StoreApi.getAllItems()
    .then(res => {
      const choices = res.data;
      setData(choices.reverse());
    })
    .finally(function() {
      setRequest(true);
    });
  }, [data.length]);

  const itensInformation = () => {
    const itens = data.map(obj => {
      const options = (
        <Link to={`/loja-virtual/item/${obj._id}`}> Opções </Link>
      );
      return [obj.title, obj.description, obj.value, obj.quantity, options];
    });
    return itens;
  };

  const dataTable = {
    title: (
      <TitleTableAdd
        to="/loja-virtual/adicionar-item"
        title="Adicionar Item"
        titleTable="itens"
      />
    ),
    columns: ["Titulo", "Descricao", "Valor", "Quantidade", "Opções"],
    data: itensInformation(),
    request,
    link: "/loja-virtual/item/"
  };
  if (data[1]) {
    StoreApi.getAllOrders("5e7a20d55a6fc7001790133c")
  }
  return (
    <div className="App">
      <MyContext.Provider value={dataTable}>
        <Table />
      </MyContext.Provider>
    </div>
  );
};

export default AllItems;
