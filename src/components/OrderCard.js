import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import {
  dateToString,
  getHourFromDate
} from "../screen/store/items/Utils/DateFormat";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 20,
    width: 500,
    borderStyle: "solid",
    borderBlockWidth: "1px",
    borderRightWidth: "1px",
    borderLeftWidth: "1px",
    "&:hover": {
      scale: 1.02,
      boxShadow: "rgba(0,0,0,.50)0 0 20px;"
    },
    borderWidth: "20px",
    borderColor: "#000"
  },
  orderDescription: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  informationContent: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    color: "#000",
    margin: 0
  },
  image: {
    marginTop: 5,
    "&:hover": {
      cursor: "pointer"
    }
  },
  information: {
    color: "#000",
    wordBreak: "break-all",
    fontSize: 20
  }
}));

const OrderCard = ({pedido, item}) => {
  function handleImageClick(e) {
    e.preventDefault();
    history.push(`/loja-virtual/item/${item.id}`)
  }

  const capitalizeFirsLetter = (word = "status") => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  };

  const styles = useStyles();
  let history = useHistory();

  return (
    <Card className={styles.root}>
      <CardContent className={styles.informationContent}>
        <Typography className={styles.information}>
          <strong>Número do pedido: </strong>
          {pedido._id}
        </Typography>
        <Typography className={styles.information}>
          <strong>Criado por: </strong>
          {pedido._user ? pedido._user.name : null}, em{" "}
          {dateToString(pedido.created_at)} às{" "}
          {getHourFromDate(pedido.created_at)}
        </Typography>
      </CardContent>
      <div className={styles.orderDescription}>
        <CardContent className={styles.informationContent}>
          <Typography className={styles.information}>
            <strong>Status: </strong>
            {capitalizeFirsLetter(pedido.status)}
          </Typography>
          <Typography className={styles.information}>
            <strong>Quantidade: </strong>
            {pedido.quantity}
          </Typography>
          <Typography className={styles.information}>
            <strong>Item: </strong>
            {item.title}
          </Typography>
          <Typography className={styles.information}>
            <strong>Valor: </strong>
            {item.value * pedido.quantity}
          </Typography>
        </CardContent>

        <img
          onClick={handleImageClick}
          className={styles.image}
          width={220}
          height={110}
          src={item.image}
          alt="Imagem do item"
        />
      </div>
      <CardActionArea></CardActionArea>
    </Card>
  );
};

export default OrderCard;
