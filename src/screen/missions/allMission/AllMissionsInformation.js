import React, { useEffect, useState, Fragment } from "react";
import MissionsApi from "../MissionsApi.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Buttom } from "../../../components/buttom/Buttom";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import StatusMission from "../componentsMission/StatusMission";
import { TitleEdit } from "../../../components/Title";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absulute",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  }
}));

function AllMissionsInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id;
  const [openApprovedMission, setOpenApprovedMission] = useState(true);
  const [openPendingMission, setOpenPendingMission] = useState(false);
  const [openDisapprovedMission, setOpenDisapprovedMission] = useState(false);
  const [mission, setMissions] = useState({});

  useEffect(() => {
    MissionsApi.getMissionsInformationApi(id).then(res => {
      const missions = res.data;
      setMissions(missions);
    });
  }, [id]);

  function handleClickApprovedMissions() {
    setOpenApprovedMission(true);
    setOpenPendingMission(false);
    setOpenDisapprovedMission(false);
  }

  function handleClickPendingMissions() {
    setOpenPendingMission(true);
    setOpenApprovedMission(false);
    setOpenDisapprovedMission(false);
  }
  function handleClickDisapprovedMissions() {
    setOpenDisapprovedMission(true);
    setOpenPendingMission(false);
    setOpenApprovedMission(false);
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
      <div className={classes.root}>
        {openApprovedMission && (
          <Fragment>
            <TitleEdit title={mission.name} />
            <StatusMission id={id} status={"Aprovado"} />
          </Fragment>
        )}

        {openPendingMission && <StatusMission id={id} status={"Pendente"} />}
        {openDisapprovedMission && (
          <StatusMission id={id} status={"Rejeitado"} />
        )}
      </div>
    </Grid>
  );
}
export default AllMissionsInformation;
