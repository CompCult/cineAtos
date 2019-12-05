import React, { useEffect, useState, Fragment } from 'react'
import ChoicesApi from '../ChoicesApi.js'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Feedback from '@material-ui/icons/Feedback'
import SeeAnswer from '../componentsChoice/SeeAnswer'
import Grid from '@material-ui/core/Grid'
import { Buttom } from '../../../components/buttom/Buttom'
import BarChartIcon from '@material-ui/icons/BarChart'
import Charts from '../componentsChoice/Charts'

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
}));

function AllChoiceInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id
  const [choices, setChoices] = useState({});
  const [openSeeAnswer, setOpenSeeAnswer] = useState(false);

  useEffect(() => {
    ChoicesApi.getChoicesInformationApi(id)
      .then(res => {
        const choice = res.data
        setChoices(choice)
      })

  }, [id])

  function handleClickSeeAnswer() {
    setOpenSeeAnswer(true);
  }

  function handleClickChart() {
    setOpenSeeAnswer(false);
  }

  const title = (
    <div className={classes.root}>
      <Box fontSize={60} fontWeight="fontWeightBold">{choices.title}</Box>
      <Box fontSize={50} fontWeight="fontWeightMedium">{choices.description}</Box>
      <Charts id={id} correctAnswer={choices.correct_answer}/>
    </div>
  )

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
      <div>
        <Buttom icon={<BarChartIcon />} title='Ver gráfico' onClick={handleClickChart} />
        <Buttom icon={<Feedback />} title='Ver Resposta' onClick={handleClickSeeAnswer} />
      </div>
      <div className={classes.margin} >
        {!(openSeeAnswer) && <Fragment >{title}</Fragment>}
        {openSeeAnswer && <SeeAnswer id={id} titleChoices={choices.title} />}
      </div>
    </Grid>
  )
}

export default AllChoiceInformation