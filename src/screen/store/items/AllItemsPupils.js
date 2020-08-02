import React, { useEffect, useState } from "react";
import StoreApi from "../StoreApi";
import Table from "./componentsItems/Table";

const AllItems = () => {
    const [data, setData] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        StoreApi.getAllItems()
            .then(res => {
                const items = res.data.filter((obj) => obj.isCreatedByMission === true);
                setData(items.reverse());
            })
            .finally(function () {
                setRequest(true);
            });
    }, [data.length]);

    return <Table data={data} request={request} isStudentWork />;
};

export default AllItems;
