import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Card, CardContent, makeStyles, createMuiTheme, createStyles } from "@material-ui/core";
import {
  dateToString,
  getHourFromDate
} from "../screen/store/items/Utils/DateFormat";


const useStyles = makeStyles(theme => ({
  
  card: {
    display: "flex",
    flexDirection: "column",
    color: "#000",
    borderRadius: 10,
    width: 830,
    "&:last-child": {
      paddingBottom: 0
    }
  },

  header: {
    display: "flex",
    backgroundColor: "#4E7B8E",
    marginTop: 20,
    justifyContent: "space-between",
    color: "#fff",
    padding: "2px 16px",
    alignItems: "center"
  },

  headerInformations: {
    fontSize: 24,
    marginLeft: 10,
    marginRight: 10
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bodyInformations: {
    display: "flex",
    flexDirection: "column",
    width: "available",
    height: 200,
    padding: 0,
    justifyContent: "space-between"
  },
  bodyInformation: {
    marginLeft: 40,
    display: "flex",
    boxSizing: "border-box",
    backgroundColor: "#4E7B8E20",
    justifyContent: "space-between",
    padding: 5,

    borderRadius: 5
  },
  bodyInformationKey: {
    fontSize: 20,
    color: "#000574"
  },
  bodyInformationValue: {
    fontSize: 20,
    marginRight: 20
  }
}));

const OrderCard = ({ pedido, item }) => {
  function handleImageClick(e) {
    e.preventDefault();
    history.push(`/loja-virtual/item/${item.id}`);
  }

  const capitalizeFirsLetter = (word = "status") => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  };

  const styles = useStyles();
  let history = useHistory();

  return (
    <Card className={styles.card}>
      <CardContent className={styles.header}>
        <Typography className={styles.headerInformations}>
          {item.title}
        </Typography>
        <Typography className={styles.headerInformations}>
          Criado por: {pedido._user ? pedido._user.name : null}, em{" "}
          {dateToString(pedido.created_at)} às{" "}
          {getHourFromDate(pedido.created_at)}
        </Typography>
      </CardContent>
      <CardContent className={styles.body}>
        <img
          onClick={handleImageClick}
          width={200}
          height={180}
          src={item.image}
          alt="Imagem do item"
        />
        <div className={styles.bodyInformations}>
          <Typography className={styles.bodyInformation}>
            <Typography className={styles.bodyInformationKey}>
              Quantidade:{" "}
            </Typography>
            <Typography className={styles.bodyInformationValue}>
              {pedido.quantity}
            </Typography>
          </Typography>
          <Typography className={styles.bodyInformation}>
            <Typography className={styles.bodyInformationKey}>
              Status:{" "}
            </Typography>
            <Typography className={styles.bodyInformationValue}>
              {capitalizeFirsLetter(pedido.status)}
            </Typography>
          </Typography>
          <Typography className={styles.bodyInformation}>
            <Typography className={styles.bodyInformationKey}>
              Valor:{" "}
            </Typography>
            <Typography className={styles.bodyInformationValue}>
              {item.value * pedido.quantity}
            </Typography>
          </Typography>
          <Typography className={styles.bodyInformation}>
            <Typography className={styles.bodyInformationKey}>
              Num. do Pedido:{" "}
            </Typography>
            <Typography className={styles.bodyInformationValue}>
              {pedido._id}
            </Typography>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
