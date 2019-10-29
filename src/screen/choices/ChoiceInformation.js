import React, { useEffect, useState, Fragment } from 'react'
import ChoicesApi from './ChoicesApi.js'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Feedback from '@material-ui/icons/Feedback'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Fab from '@material-ui/core/Fab'
import SeeAnswer from './components/SeeAnswer'
import EditQuiz from './components/EditQuiz'
import DeleteQuiz from './components/DeleteQuiz'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  position: {
    float: 'left',
  },
  margin: {
    position: 'absulute',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  },
}));

function ChoiceInformation(props) {
  const classes = useStyles();
  const id = props.match.params.id
  const [choices, setChoices] = useState({});
  const [openSeeAnswer, setOpenSeeAnswer] = useState(false);
  const [openEditQuiz, setOpenEditQuiz] = useState(false);

  const [openDeleteQuiz, setOpenDeleteQuiz] = useState(false);

  useEffect(() => {
    ChoicesApi.getChoicesInformationApi(id)
      .then(res => {
        const choice = res.data
        setChoices(choice)
      })

  }, [id])

  function handleClickSeeAnswer() {
    setOpenEditQuiz(false);
    setOpenSeeAnswer(!openSeeAnswer);
  }

  function handleClickEditQuiz() {
    setOpenSeeAnswer(false);
    setOpenEditQuiz(!openEditQuiz);
  }

  function handleClickDeleteQuiz() {
    setOpenDeleteQuiz(!openDeleteQuiz);
  }

  const title = (
    <div className={classes.root}>
      <Box fontSize={60} fontWeight="fontWeightBold">{choices.title}</Box>
      <Box fontSize={50} fontWeight="fontWeightMedium">{choices.description}</Box>
    </div>
  )

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start">

      <div className={classes.position}>
        <div>
          <Fab onClick={handleClickSeeAnswer} color="secondary" aria-label="feedback" size={'small'} className={classes.root} id='button'>
            <Feedback />
          </Fab>
          Ver Resposta
        </div>

        <div>
          <Fab onClick={handleClickEditQuiz} color="secondary" aria-label="edit" size={'small'} className={classes.root} id='button'>
            <EditIcon />
          </Fab>
          Editar Quiz
        </div>

        <div>
          <Fab onClick={handleClickDeleteQuiz} color="secondary" aria-label="delete" size={'small'} className={classes.root} id='button'>
            <DeleteIcon />
          </Fab>
          Deletar Quiz
        </div>
      </div>
      <div className={classes.margin} >
        {!(openSeeAnswer || openEditQuiz) && <Fragment >{title}</Fragment>}
        {openSeeAnswer && <SeeAnswer id={id} titleChoices={choices.title} />}
        {openEditQuiz && <EditQuiz quiz={choices} />}
        {openDeleteQuiz && <DeleteQuiz id={id} />}
      </div>
    </Grid>

  )
}

export default ChoiceInformation