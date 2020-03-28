import React from 'react'
import ItemCard from "../../../../components/ItemCard";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { TitleTableAdd } from "../../../../components/Title";
import Progress from '../../../../components/Progress';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 90,
        marginLeft: '9%',
        marginRight: '9%',
        marginBottom: 40
    },
    pagination: {
        margin: 30
    },
}));

export default function Table({ data, request }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const itensInformation = () => {
        return data.map((obj, index) => {
            return <div key={index}><ItemCard item={obj} /></div>
        })
    };
    console.log(page)

    if (!request) {
        return <Progress />
    }

    return (
        <Card className={classes.root}>
            <div style={{ padding: 20 }}>
                <TitleTableAdd to="/loja-virtual/adicionar-item" title="Adicionar Item" />
            </div>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                {itensInformation()}
            </Grid>
            <Grid container direction="row" justify="center" alignItems="flex-start" >
                <Pagination count={10} shape="rounded" className={classes.pagination} page={page} onChange={handleChange} />
            </Grid>
        </Card>
    );
}
