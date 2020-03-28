import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import StoreApi from "../StoreApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { dateToString, getHourFromDate } from "../items/Utils/DateFormat";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: 10,
    
  },
  card: {
    "&:hover": {
      boxShadow: "0px 0px 5px 5px rgb(0, 0, 0, 0.2)"
    }
  },
  media: {
    width: 250,
    height: 180,
    padding: 5
  },
  information: {
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ pedido, item, action }) {
  const classes = useStyles();
  let history = useHistory();

  const handleSubmit = async event => {

    let status = { status: event }
    await StoreApi.putAllOrders(item._id, pedido._id, status)
      .then(res => {
        history.push(`/loja-virtual/item/${item._id}`);
        toast.success(`Pedido ${status} com sucesso!`);
      })
      .catch(err => {
        toast.error(`Erro ao ${status} pedido`);
      });
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {pedido._user.name[0]}
          </Avatar>
        }
        title={`Criado por ${pedido._user.name}`}
        subheader={`em ${dateToString(pedido.created_at)} às ${getHourFromDate(pedido.created_at)}`}
      />
      <div style={{ textAlign: 'center' }}>
        <img src={item.image} className={classes.media} alt="images" />
      </div>
      <CardContent className={classes.body}>
        <Typography className={classes.information} variant="body2" component="p">
        <div>
          {`Quantidade: ${pedido.quantity}`} 
        </div>
        <div>
          {`Valor Total: ${item.value * pedido.quantity}`}
        </div>
        </Typography>
        <Typography variant="body2" component="p">
          {`Id do Pedido: ${pedido._id}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Status: ${pedido.status}`}
        </Typography>

      </CardContent>
      {action &&
        <CardActions disableSpacing>
          <Button size="small" color="primary" onClick={() => handleSubmit("aprovado")}>
            Aprovar
        </Button>
          <Button size="small" color="primary" onClick={() => handleSubmit("rejeitado")}>
            Rejeitar
        </Button>
        </CardActions>
      }
    </Card>
  );
}