import React, { useEffect, useState, Fragment } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { makeStyles } from '@material-ui/core/styles'
import MenuSlide from './MenuSlide'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 'bold'
  },

}));

function ChoiceInformation(props) {
  const classes = useStyles();
  const [choiceAnswers, setChoiceAnswers] = useState();
  const [choices, setChoices] = useState({});
  const id = props.match.params.id

  useEffect(() => {

    ChoicesApi.getChoicesInformationAnswersApi(id)
      .then(res => {
        const choiceAnswers = res.data
        setChoiceAnswers(choiceAnswers)
      })

    ChoicesApi.getChoicesInformationApi(id)
      .then(res => {
        const choice = res.data
        setChoices(choice)
      })

  }, [id])

  console.log(choices)
  return (
    <div >
      <MenuSlide />
      <div className={classes.root}>
        <Box fontSize={60} fontWeight="fontWeightBold">{choices.title}</Box>
        <Box fontSize={50} fontWeight="fontWeightMedium">{choices.description}</Box>

      </div>


    </div>


  )
}

export default ChoiceInformation