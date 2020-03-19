import React from "react";
import { ListItemComponent } from "../../../components/ListItemComponent";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Drawer from "../../../components/Drawer";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemInformation from './ItemInformation';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import StoreApi from "../StoreApi";


const Item = () => {
  const [value, setValue] = useState(1);
  const [item, setItem] = useState({});
  const { id } = useParams();
  const handleValue = value => setValue(value);

  const pag = value => {
    if (value === 1) {
      return <ItemInformation item={item}/>
    } else if (value === 2) {
      return <UpdateItem item={item}/>;
    } else {
      return <DeleteItem id={id}/>
    }
  };

  useEffect(() => {
    StoreApi.getItem(id).then(res => {
      setItem(res.data)
    });
  }, [id]);

  const list = () => {
    return (
      <>
        <ListItemComponent
          valor={1}
          onClick={() => handleValue(1)}
          icon={<InfoIcon />}
          title={"Informação Item"}
        />
        <ListItemComponent
          valor={2}
          onClick={() => handleValue(2)}
          icon={<EditIcon />}
          title={"Atualizar Item"}
        />
        <ListItemComponent
          valor={3}
          onClick={() => handleValue(3)}
          icon={<DeleteIcon />}
          title={"Deletar Item"}
        />
      </>
    );
  };

  return <Drawer title="Menu Item" list={list()} body={pag(value)} />;
};

export default Item;
