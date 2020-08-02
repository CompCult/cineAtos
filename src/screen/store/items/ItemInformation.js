import React from "react";
import ImageDefaultUser from "../../../images/imageDefaultUser.png";
import { makeStyles } from "@material-ui/core/styles";
import { transformData } from '../../../components/TransformData';

const informationSyles = makeStyles(theme => ({
  image: {
    width: 150,
    height: 180
  },
  video: {
    width: '100%',
    maxWidth: 500,
    margin: '1%'
  },
  informacoes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const ItemInformation = ({ item }) => {
  const styles = informationSyles();

  const itemsPupils = (data) => {
    console.log(data)
    return <div>
      {data.has_text && <p>{data.text}</p>}
      {
        data.has_video && (
          <video src={data.video} controls className={styles.video}>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        )
      }
      {
        data.has_audio && (
          <audio src={data.audio} controls loop>
            Navegador não suporta
          </audio>
        )
      }
    </div>
  }

  return (
    <div className={styles.informacoes}>
      <img
        className={styles.image}
        src={`${item.image ? item.image : ImageDefaultUser}`}
        alt="Item"
      />
      <h1>
        {item.title} {(item.isCreatedByMission ? '' : " - " + item.description)}
      </h1>
      {item.isCreatedByMission ? itemsPupils(item) : <></>}
      <h2>Quantidade: {item.quantity}</h2>
      <h2>Valor: {item.value}</h2>
      <h2>
        De: {transformData(item.start_time)} até: {transformData(item.end_time)}
      </h2>
    </div>
  );
};

export default ItemInformation;
