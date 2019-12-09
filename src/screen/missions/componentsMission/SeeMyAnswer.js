import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import MissionsApi from '../MissionsApi'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"

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
  },
  logo: {
    marginTop: '1%',
    width: '50%',
    height: '50%',
    Maxwidth: 100,
    Maxheight: 100
  },
  button: {
    marginRight: '7%'
  }
}));
function SeeMyAnswer(props) {
  const classes = useStyles()
  let history = useHistory()
  let id = props.match.params
  const [data, setData] = useState({})
  const [mission, setMission] = useState(true)
  const [user, setUser] = useState(true)

  useEffect(() => {
    MissionsApi.getSeeAnswerMissionsInformationApi(id.idMission, id.idSeeAnswer)
      .then(res => {
        const seeAnswer = res.data
        setData(seeAnswer)
        setMission(res.data._mission)
        setUser(res.data._user)
      })
  }, [id.idMission, id.idSeeAnswer])

  const title = (
    <div>
      <Box fontSize={50} fontWeight="fontWeightMedium">Usuário: {user.name}</Box>
      <Box fontSize={40} fontWeight="fontWeightBold">Missão: {mission.name}</Box>
    </div>
  )

  const putSeeMyAnswerApproved = async () => {
    const status = {
      status: "Aprovado"
    }
    await MissionsApi.putSeeMyAnswer(id.idMission, id.idSeeAnswer, status).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
    setTimeout(() => history.replace("/missoes/minhas-missoes/" + id.idMission), 10)
  }

  const putSeeMyAnswerRejected = async () => {
    const status = {
      status: "Rejeitado"
    }
    await MissionsApi.putSeeMyAnswer(id.idMission, id.idSeeAnswer, status).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
    setTimeout(() => history.replace("/missoes/minhas-missoes/" + id.idMission), 10)
  }

  return (
    <div className={classes.root}>
      {title}
      {data.image !== undefined && <img src={data.image} className={classes.logo} alt="imageDefaultUser" />}
      {data.text_msg !== undefined && <p>{data.text_msg}</p>}

      <Button type="submit" className={classes.button} variant="contained" color="primary" onClick={putSeeMyAnswerRejected}>Rejeitar</Button>
      <Button type="submit" variant="contained" onClick={putSeeMyAnswerApproved} color="primary">Aprovar</Button>

    </div>
  );
}

export default SeeMyAnswer