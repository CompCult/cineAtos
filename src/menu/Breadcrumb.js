import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemLink } from "../components/ListItemComponent";
import { getIsGestor, getIsPermissaoProfessor } from "../services/Auth";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(3)
  },
  list: {
    width: 250,
  }
}));

function RouterBreadcrumbs({ onClick }) {
  const classes = useStyles();

  const [openChoices, setOpenChoices] = useState(false);
  const [openMission, setOpenMission] = useState(false);
  const [openMemories, setOpenMemories] = useState(false);
  const [openStore, setOpenStore] = useState(false);
  function handleClickChoices() {
    setOpenChoices(!openChoices);
  }

  function handleClickMission() {
    setOpenMission(!openMission);
  }

  function handleClickMemories() {
    setOpenMemories(!openMemories);
  }

  function handleClickStore() {
    setOpenStore(!openStore);
  }

  const listPermissionAll = () => {
    return (
      <>
        <ListItem button onClick={handleClickChoices}>
          <ListItemText primary="Quizz" />
          {openChoices ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openChoices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={onClick}>

            <ListItemLink className={classes.nested} to="/quiz/meus-quizes" primary="Meus Quizzes" />
            <ListItemLink className={classes.nested} to="/quiz/todos-quizes" primary="Todos os Quizzes" />
          </List>
        </Collapse>
        <ListItem button onClick={handleClickMission}>
          <ListItemText primary="Missões" />
          {openMission ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMission} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={onClick}>
            <ListItemLink className={classes.nested} to="/missoes/minhas-missoes" primary="Minhas Missões" />
            <ListItemLink className={classes.nested} to="/missoes/todas-missoes" primary="Todas as Missões" />
          </List>
        </Collapse>
        <ListItem button onClick={handleClickMemories}>
          <ListItemText primary="Mini Games" />
          {openMemories ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMemories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={onClick}>

            <ListItemLink className={classes.nested} to="/miniGames/menoria" primary="Jogo da memória" />
            {/* <ListItemLink className={classes.nested} to="/miniGames/forca" primary="Jogo da forca" /> */}
          </List>
        </Collapse>

        <ListItem button onClick={handleClickStore}>
          <ListItemText primary="Loja Virtual" />
          {openStore ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={onClick}>
            <ListItemLink className={classes.nested} to="/loja-virtual/todos-itens" primary="Loja Virtual" />
            <ListItemLink className={classes.nested} to="/loja-virtual/todos-itens-alunos" primary="Obras dos alunos" />
          </List>
        </Collapse>
      </>
    )
  }

  const listPermissionWithout = () => {
    return (
      <>
        <div onClick={onClick}>
          <ListItemLink to="/quiz/todos-quizes" primary="Todos os Quizzes" />
        </div>
        <div onClick={onClick}>
          <ListItemLink to="/missoes/todas-missoes" primary="Todas as Missões" />
        </div>
      </>
    )
  }

  return (
    <List className={classes.list}>
      {getIsGestor() &&
        <div onClick={onClick}>
          <ListItemLink to="/pessoas" primary="Pessoas" />
        </div>
      }
      {(getIsGestor() || getIsPermissaoProfessor()) ? listPermissionAll() : listPermissionWithout()}
      <div onClick={onClick}>
        <ListItemLink to="/mapa-do-jogo" primary="Mapa do Jogo" />
      </div>
    </List>
  );
}

export default RouterBreadcrumbs;
