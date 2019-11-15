import React, { useEffect, useState, Fragment } from 'react'
import MissionsApi from '../MissionsApi.js'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import { Buttom } from '../../../components/buttom/Buttom'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import DeleteMission from './componentsMission/DeleteMission'
import EditMission from './componentsMission/EditMission'
import StatusMission from './componentsMission/StatusMission'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  margin: {
    position: 'absulute',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  }
}));
//import { useLocation } from "react-router-dom";
function MissionsInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id
  const [openEditMission, setOpenEditMission] = useState(false);
  const [openDeleteMission, setOpenDeleteMission] = useState(false);
  const [openApprovedMission, setOpenApprovedMission] = useState(false);
  const [openPendingMission, setOpenPendingMission] = useState(false);
  const [openDisapprovedMission, setOpenDisapprovedMission] = useState(false);
  const [mission, setMissions] = useState({})
  // let location = useLocation();
  //console.log(location.pathname)
  useEffect(() => {

    MissionsApi.getMissionsInformationApi(id)
      .then(res => {
        const missions = res.data
        setMissions(missions)
      })

  }, [id])

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

  const title = (
    <div className={classes.root}>
      <Box fontSize={60} fontWeight="fontWeightBold">{mission.name}</Box>
      <Box fontSize={50} fontWeight="fontWeightMedium">{mission.description}</Box>
    </div>
  )

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Buttom icon={<EditIcon />} title='Editar Missões' onClick={handleClickEditMissions} />
        <Buttom icon={<DeleteIcon />} title='Deletar Missões' onClick={handleClickDeleteMissions} />
        <Buttom icon={<SentimentSatisfiedAltIcon />} title='Missões Aprovadas' onClick={handleClickApprovedMissions} />
        <Buttom icon={<SentimentDissatisfiedIcon />} title='Missões Pendentes' onClick={handleClickPendingMissions} />
        <Buttom icon={<SentimentVeryDissatisfiedIcon />} title='Missões Reprovadas' onClick={handleClickDisapprovedMissions} />
      </Grid>
      <div className={classes.margin} >
        {!(openEditMission || openApprovedMission || openPendingMission || openDisapprovedMission) && <Fragment >{title}</Fragment>}

        {openEditMission && <EditMission mission={mission} />}

        {openDeleteMission && <DeleteMission id={id} />}
        {openApprovedMission && <StatusMission status={"Aprovado"} />}
        {openPendingMission && <StatusMission status={"Pendente"} />}
        {openDisapprovedMission && <StatusMission status={"Reprovado"} />}
      </div>
    </div>
  )
}
export default MissionsInformation