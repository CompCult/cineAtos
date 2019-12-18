import React, { useEffect, useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import { makeStyles } from "@material-ui/core/styles";
import Feedback from "@material-ui/icons/Feedback";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SeeAnswer from "../componentsChoice/SeeAnswer";
import EditQuiz from "../componentsChoice/EditQuiz";
import DeleteQuiz from "../componentsChoice/DeleteQuiz";
import Grid from "@material-ui/core/Grid";
import { Buttom } from "../../../components/buttom/Buttom";
import BarChartIcon from "@material-ui/icons/BarChart";
import Charts from "../componentsChoice/Charts";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absulute",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  }
}));

function ChoiceInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id;
  const [choices, setChoices] = useState({});
  const [openSeeAnswer, setOpenSeeAnswer] = useState(false);
  const [openEditQuiz, setOpenEditQuiz] = useState(false);

  const [openDeleteQuiz, setOpenDeleteQuiz] = useState(false);

  useEffect(() => {
    ChoicesApi.getChoicesInformationApi(id).then(res => {
      const choice = res.data;
      setChoices(choice);
    });
  }, [id]);

  function handleClickSeeAnswer() {
    setOpenEditQuiz(false);
    setOpenSeeAnswer(true);
  }

  function handleClickEditQuiz() {
    setOpenSeeAnswer(false);
    setOpenEditQuiz(true);
  }

  function handleClickChart() {
    setOpenSeeAnswer(false);
    setOpenEditQuiz(false);
  }

  function handleClickDeleteQuiz() {
    setOpenDeleteQuiz(!openDeleteQuiz);
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
          icon={<BarChartIcon />}
          title="Ver gráfico"
          onClick={handleClickChart}
        />
        <Buttom
          icon={<Feedback />}
          title="Ver Resposta"
          onClick={handleClickSeeAnswer}
        />
        <Buttom
          icon={<EditIcon />}
          title="Editar Quiz"
          onClick={handleClickEditQuiz}
        />
        <Buttom
          icon={<DeleteIcon />}
          title="Deletar Quiz"
          onClick={handleClickDeleteQuiz}
        />
      </div>
      <div className={classes.root}>
        {!(openSeeAnswer || openEditQuiz) && (
          <Charts id={id} nameQuiz={choices.title} />
        )}
        {openSeeAnswer && <SeeAnswer id={id} titleChoices={choices.title} />}
        {openEditQuiz && <EditQuiz quiz={choices} />}
        {openDeleteQuiz && <DeleteQuiz id={id} />}
      </div>
    </Grid>
  );
}

export default ChoiceInformation;