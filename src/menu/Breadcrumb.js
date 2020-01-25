import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemComponents from "./ListItemComponent";
import { getIsGestor } from "../services/Auth";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(3)
  },
  list: {
    width: 250,
  }
}));

function RouterBreadcrumbs() {
  const classes = useStyles();

  const [openChoices, setOpenChoices] = useState(false);
  const [openMission, setOpenMission] = useState(false);
  //const [openEvents, setOpenEvents] = useState(false);
  const [openMemories, setOpenMemories] = useState(false);
  function handleClickChoices() {
    setOpenChoices(!openChoices);
  }

  function handleClickMission() {
    setOpenMission(!openMission);
  }

  // function handleClickEvents() {
  //  setOpenEvents(!openEvents);
  //}

  function handleClickMemories() {
    setOpenMemories(!openMemories);
  }

  return (
    <List className={classes.list}>
      {getIsGestor() === 'true' &&
        <ListItemComponents to="/pessoas" primary="Pessoas" />
      }
      <ListItem button onClick={handleClickChoices}>
        <ListItemText primary="Quizz" />
        {openChoices ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openChoices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemComponents
            className={classes.nested}
            to="/quiz/meus-quizes"
            primary="Meus Quizzes"
          />

          <ListItemComponents
            className={classes.nested}
            to="/quiz/todos-quizes"
            primary="Todos os Quizzes"
          />
        </List>
      </Collapse>

      <ListItem button onClick={handleClickMission}>
        <ListItemText primary="Missões" />
        {openMission ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMission} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemComponents
            className={classes.nested}
            to="/missoes/minhas-missoes"
            primary="Minhas Missões"
          />

          <ListItemComponents
            className={classes.nested}
            to="/missoes/todas-missoes"
            primary="Todas as Missões"
          />
        </List>
      </Collapse>
      {/*

            <ListItem button onClick={handleClickEvents}>
                <ListItemText primary="Eventos" />
                {openEvents ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openEvents} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/eventos" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Eventos" />
                        </ListItem>
                    </Link>

                    <Link to="/eventos/pedidos-de-eventos" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Pedidos de Eventos" />
                        </ListItem>
                    </Link>

                </List>
            </Collapse>
            */}
      {getIsGestor() !== null &&
        <>
          <ListItem button onClick={handleClickMemories}>
            <ListItemText primary="Mini Games" />
            {openMemories ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMemories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemComponents
                className={classes.nested}
                to="/miniGames/menoria"
                primary="Jogo da memória"
              />

              <ListItemComponents
                className={classes.nested}
                to="/miniGames/forca"
                primary="Jogo da forca"
              />

            </List>

          </Collapse>
        </>
      }
    </List>
  );
}

export default RouterBreadcrumbs;
