import React, { useEffect, useState } from "react";
import { TitleTableAdd } from "../../../components/Title";
import StoreApi from "../StoreApi";
import { Link } from "react-router-dom";
import ItemCard from "../../../components/ItemCard";
import OrderCard from "../../../components/OrderCard";
import Table from './componentsItems/Table';

const AllItems = () => {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    StoreApi.getAllItems()
      .then(res => {
        const Items = res.data;
        setData(Items.reverse());
      })
      .finally(function () {
        setRequest(true);
      });
  }, [data.length]);


  if (data[1]) {
    StoreApi.getAllOrders("5e7a20d55a6fc7001790133c")
  }
  return (
    <Table data={data} />
  );
};

export default AllItems;
