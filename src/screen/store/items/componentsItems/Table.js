import React from 'react'
import ItemCard from "../../../../components/ItemCard";
import Grid from '@material-ui/core/Grid';

export default function Table({ data }) {

    const itensInformation = () => {
        return data.map((obj) => {
            return <ItemCard item={obj} />
        })
    };

    return (
        <Grid style={{ marginTop: 90 }} container direction="row" justify="flex-start" alignItems="flex-start">

            {itensInformation()}
        </Grid >

    );
}
