import React from "react";
import ImageDefaultUser from "../../../images/imageDefaultUser.png";
import { makeStyles } from "@material-ui/core/styles";
import { transformData } from '../../../components/TransformData';

const informationSyles = makeStyles(theme => ({
  image: {
    width: 150,
    height: 180
  },

  informacoes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const ItemInformation = ({ item }) => {
  const styles = informationSyles();
  return (
    <div className={styles.informacoes}>
      <img
        className={styles.image}
        src={`${item.image ? item.image : ImageDefaultUser}`}
        alt="Item"
      />
      <h1>
        {item.title} - {item.description}
      </h1>
      <h2>Quantidade: {item.quantity}</h2>
      <h2>Valor: {item.value}</h2>
      <h2>
        De: {transformData(item.start_time)} até: {transformData(item.end_time)}
      </h2>
    </div>
  );
};

export default ItemInformation;
