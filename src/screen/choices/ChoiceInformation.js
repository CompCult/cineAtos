import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { makeStyles } from '@material-ui/core/styles'
import MenuSlide from './MenuSlide'

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: 'center',
  }
}));

function ChoiceInformation(props) {
  const classes = useStyles();
  const [choiceAnswers, setChoiceAnswers] = useState();
  const [choices, setChoices] = useState();
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
    </div>

  )
}

export default ChoiceInformation