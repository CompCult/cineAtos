import React, { useEffect, useState } from 'react'
import OrderCard from "./OrderCard";
import Grid from '@material-ui/core/Grid';
import Progress from '../../../components/Progress';
import StoreApi from "../StoreApi";
import Card from '@material-ui/core/Card';

export default function Orders({ item, status }) {
    const [data, setData] = useState([]);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        StoreApi.getAllOrders(item._id, status)
            .then(res => {
                setData(res.data);
            })
            .finally(function () {
                setRequest(true);
            });
    }, [item._id, status]);

    const itensInformation = () => {
        return data.map((obj, index) => {
            return (
                <div key={index}>
                    <OrderCard pedido={obj} item={item} action={status === 'pendente'} />
                </div>
            )
        })
    };

    if (!request) {
        return <Progress />
    }

    return (
        <Card>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                {itensInformation()}
            </Grid>
        </Card>
    );
}
