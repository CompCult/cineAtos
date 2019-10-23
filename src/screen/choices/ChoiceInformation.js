import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Feedback from '@material-ui/icons/Feedback'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    marginLeft: '10%',
    marginRight: '10%'
  },
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

    <div className={classes.center}>
      <Tooltip title={'feedback'}>
        <Fab color="secondary" aria-label="feedback" className={classes.fab}>
          <Feedback />
        </Fab>
      </Tooltip>

      <Tooltip title={'edit'}>
        <Fab color="secondary" aria-label="edit" className={classes.fab}>
          <EditIcon />
        </Fab>
      </Tooltip>
      <Tooltip title={'delete'}>
        <Fab color="secondary" aria-label="delete" className={classes.fab}>
          <DeleteIcon />
        </Fab>
      </Tooltip>
    </div>

  )
}

export default ChoiceInformation