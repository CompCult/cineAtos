import React, { useEffect, useState } from "react";
import StoreApi from "../StoreApi";
import Table from "./componentsItems/Table";

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

  return <Table data={data} request={request} />;
};

export default AllItems;
