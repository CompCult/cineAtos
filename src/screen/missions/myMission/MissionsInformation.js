import React, { useEffect, useState, Fragment } from "react";
import MissionsApi from "../MissionsApi.js";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import { Buttom } from "../../../components/buttom/Buttom";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import DeleteMission from "../componentsMission/DeleteMission";
import EditMission from "../componentsMission/EditMission";
import StatusMission from "../componentsMission/StatusMission";
import { TitleEdit } from "../../../components/Title";

const useStyles = makeStyles(theme => ({
  margin: {
    position: "absulute",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  }
}));
//import { useLocation } from "react-router-dom";
function MissionsInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id;
  const [openEditMission, setOpenEditMission] = useState(false);
  const [openDeleteMission, setOpenDeleteMission] = useState(false);
  const [openApprovedMission, setOpenApprovedMission] = useState(false);
  const [openPendingMission, setOpenPendingMission] = useState(true);
  const [openDisapprovedMission, setOpenDisapprovedMission] = useState(false);
  const [mission, setMissions] = useState({});
  // let location = useLocation();
  //console.log(location.pathname)
  useEffect(() => {
    MissionsApi.getMissionsInformationApi(id).then(res => {
      const missions = res.data;
      setMissions(missions);
    });
  }, [id]);

  function handleClickEditMissions() {
    setOpenEditMission(true);
    setOpenApprovedMission(false);
    setOpenPendingMission(false);
    setOpenDisapprovedMission(false);
  }

  function handleClickApprovedMissions() {
    setOpenEditMission(false);
    setOpenApprovedMission(true);
    setOpenPendingMission(false);
    setOpenDisapprovedMission(false);
  }

  function handleClickPendingMissions() {
    setOpenPendingMission(true);
    setOpenEditMission(false);
    setOpenApprovedMission(false);
    setOpenDisapprovedMission(false);
  }
  function handleClickDisapprovedMissions() {
    setOpenDisapprovedMission(true);
    setOpenPendingMission(false);
    setOpenEditMission(false);
    setOpenApprovedMission(false);
  }

  function handleClickDeleteMissions() {
    setOpenDeleteMission(!openDeleteMission);
  }

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
          title="Editar Missões"
          onClick={handleClickEditMissions}
        />
        <Buttom
          icon={<DeleteIcon />}
          title="Deletar Missões"
          onClick={handleClickDeleteMissions}
        />
        <Buttom
          icon={<SentimentSatisfiedAltIcon />}
          title="Missões Aprovadas"
          onClick={handleClickApprovedMissions}
        />
        <Buttom
          icon={<SentimentDissatisfiedIcon />}
          title="Missões Pendentes"
          onClick={handleClickPendingMissions}
        />
        <Buttom
          icon={<SentimentVeryDissatisfiedIcon />}
          title="Missões Rejeitadas"
          onClick={handleClickDisapprovedMissions}
        />
      </div>
      <div className={classes.margin}>
        {openEditMission && <EditMission mission={mission} />}

        {openDeleteMission && <DeleteMission id={id} />}
        {openApprovedMission && <StatusMission id={id} status={"Aprovado"} />}
        {openPendingMission && (
          <Fragment>
            <TitleEdit title={mission.name} />
            <StatusMission id={id} status={"Pendente"} />
          </Fragment>
        )}
        {openDisapprovedMission && (
          <StatusMission id={id} status={"Rejeitado"} />
        )}
      </div>
    </Grid>
  );
}
export default MissionsInformation;
