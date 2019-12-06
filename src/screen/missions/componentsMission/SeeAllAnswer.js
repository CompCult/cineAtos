import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import MissionsApi from '../MissionsApi'
import Box from '@material-ui/core/Box'

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
    width: '70%',
    height: '70%',
    width: 400,
    height: 400
},
}));
function SeeAllAnswer(props) {
  const classes = useStyles();
  let id = props.match.params
  const [data, setData] = useState({})
  const [mission, setMission] = useState(true)
  const [user, setUser] = useState(true)

  useEffect(() => {
    MissionsApi.getSeeAnswerMissionsInformationApi(id.idMission,id.idSeeAnswer)
        .then(res => {
            const seeAnswer = res.data
            setData(seeAnswer)
            setMission(res.data._mission)
            setUser(res.data._user)
        })
  },[id.idMission,id.idSeeAnswer])
console.log(data)

  const title = (
    <div>
      <Box fontSize={50} fontWeight="fontWeightMedium">Usuário: {user.name}</Box>
      <Box fontSize={40} fontWeight="fontWeightBold">Missão: {mission.name}</Box>
    </div>
  )

  return (
      <div className={classes.root}>
        {title}
        {data.image !== undefined && <img src={data.image} className={classes.logo} alt="imageDefaultUser" />}
        {data.text_msg !== undefined && <p>{data.text_msg}</p>}
      </div>
  );
}

export default SeeAllAnswer