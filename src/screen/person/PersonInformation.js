import React, { useEffect, useState, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import PersonApi from "./PersonApi.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import { Buttom } from "../../components/buttom/Buttom";
import EditPerson from "./componentsPerson/EditPerson";
import DeletePerson from "./componentsPerson/DeletePerson";
import imageDefaultUser from "../../images/imageDefaultUser.png";
import { TitleEdit } from "../../components/Title";
import { getInfo } from "../Auth";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "center"
  },
  margin: {
    position: "absulute",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  },
  logo: {
    width: "30%",
    height: "30%",
    Maxwidth: 100,
    Maxheight: 100
  }
}));
function PersonInformation() {
  const classes = useStyles();
  const [person, setPerson] = useState({});
  const id = JSON.parse(getInfo())
  const [openEditPerson, setOpenEditPerson] = useState(false);
  const [openDeletePerson, setOpenDeletePerson] = useState(false);

  useEffect(() => {
    PersonApi.getPersonInformationApi(id).then(res => {
      let person = res.data;
      setPerson(person);
    });
  }, [id]);

  function handleClickEditPerson() {
    setOpenEditPerson(true);
    setOpenDeletePerson(false);
  }

  function handleClickDeletePerson() {
    setOpenDeletePerson(!openDeletePerson);
  }

  const title = (
    <div className={classes.root}>
      <TitleEdit title={person.name} />
      <img
        src={imageDefaultUser}
        className={classes.logo}
        alt="imageDefaultUser"
      />
    </div>
  );

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <div>
        <Buttom
          icon={<EditIcon />}
          title="Editar usuario"
          onClick={handleClickEditPerson}
        />
        <Buttom
          icon={<DeleteIcon />}
          title="Deletar usuario"
          onClick={handleClickDeletePerson}
        />
      </div>
      <div className={classes.margin}>
        {!openEditPerson && <Fragment>{title}</Fragment>}
        {openDeletePerson && <DeletePerson id={id} />}
        {openEditPerson && <EditPerson person={person} />}
      </div>
    </Grid>
  );
}

export default PersonInformation;
