import React, { useState, useEffect } from 'react';
import PersonApi from "./PersonApi.js";
import EditPerson from "./componentsPerson/EditPerson";
import DeletePerson from "./componentsPerson/DeletePerson";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useParams } from "react-router";
import imageDefaultUser from "../../images/imageDefaultUser.png";
import { Title } from "../../components/Title";
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Drawer from '../../components/Drawer';

const useStyles = makeStyles(theme => ({
  logo: {
    width: "30%",
    height: "30%",
  },
  center: {
    textAlign: "center"
  },
}));

export default function PersonInformation() {
  const classes = useStyles();
  let { id } = useParams();
  const [value, setValue] = useState(1);
  const [person, setPerson] = useState({});

  useEffect(() => {
    PersonApi.getPersonInformationApi(id).then(res => {
      let person = res.data;
      setPerson(person);
    });
  }, [id]);

  const handleValue = (value) => {
    setValue(value)
  }

  const title = (
    <div className={classes.center}>
      <Title title={person.name} />
      <img src={imageDefaultUser} className={classes.logo} alt="imageDefaultUser" />
    </div>
  );

  const pag = (value) => {
    if (value === 1) {
      return <div>{title}</div>
    } else if (value === 2) {
      return <EditPerson person={person} />
    } else {
      return <DeletePerson id={id} />
    }
  }

  const list = () => {
    return (
      <List>
        <ListItem button key={1} onClick={() => handleValue(1)}>
          <ListItemIcon>{<InfoIcon />}</ListItemIcon>
          <ListItemText primary={'Informação usuário'} />
        </ListItem>

        <ListItem button key={2} onClick={() => handleValue(2)}>
          <ListItemIcon>{<EditIcon />}</ListItemIcon>
          <ListItemText primary={'Atualizar usuário'} />
        </ListItem>

        <ListItem button key={3} onClick={() => handleValue(3)}>
          <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
          <ListItemText primary={'Deletar usuário'} />
        </ListItem>
      </List>
    )
  }

  return (
    <Drawer title='Menu Usuario' list={list()} body={pag(value)} />
  );
}
