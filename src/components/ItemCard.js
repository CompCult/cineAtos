import React from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  makeStyles
} from "@material-ui/core";
import { dateToString } from "../screen/store/items/Utils/DateFormat";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 330,
    borderStyle: "solid",
    borderBlockWidth: "1px",
    borderRightWidth: "1px",
    borderLeftWidth: "1px",
    cursor: "pointer",
    "&:hover": {
      scale: 1.02,
      boxShadow: "rgba(0,0,0,.50)0 0 20px;"
    },
    borderWidth: "20px",
    borderColor: "#000"
  },
  image: {
    marginTop: 10
  },
  informationContent: {
    display: "flex",
    flexDirection: "column",
    alignItems:"flex-start",
    color: "#000"
  },
  information: {
    wordBreak: "break-all",
    fontSize: 20
  }
}));

const ItemCard = ({ item }) => {
  const handleClick = () => {
    history.push(`/loja-virtual/item/${item._id}`);
  };

  const styles = useStyles();
  let history = useHistory();

  return (
    <Card onClick={handleClick} className={styles.root}>
      <img
        className={styles.image}
        width={240}
        height={240}
        src={item.image}
        alt="Imagem do item"
      />
      <CardContent className={styles.informationContent}>
        <Typography className={styles.information}>
          {item.title} - {item.description}
        </Typography>
        <Typography className={styles.information}>
          Quantidade: {item.quantity}
        </Typography>
        <Typography className={styles.information}>
          Valor: {item.value}
        </Typography>
        <Typography className={styles.information}>
          De {dateToString(item.start_time)} Ate: {dateToString(item.end_time)}
        </Typography>
      </CardContent>
      <CardActionArea></CardActionArea>
    </Card>
  );
};

export default ItemCard;
