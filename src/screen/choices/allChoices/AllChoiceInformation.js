import React, { useEffect, useState } from "react";
import ChoicesApi from "../ChoicesApi.js";
import { makeStyles } from "@material-ui/core/styles";
import Feedback from "@material-ui/icons/Feedback";
import SeeAnswer from "../componentsChoice/SeeAnswer";
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

function AllChoiceInformation(props) {
  const classes = useStyles();
  let id = props.match.params.id;
  const [choices, setChoices] = useState({});
  const [openSeeAnswer, setOpenSeeAnswer] = useState(false);

  useEffect(() => {
    ChoicesApi.getChoicesInformationApi(id).then(res => {
      const choice = res.data;
      setChoices(choice);
    });
  }, [id]);

  function handleClickSeeAnswer() {
    setOpenSeeAnswer(true);
  }

  function handleClickChart() {
    setOpenSeeAnswer(false);
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
      </div>
      <div className={classes.root}>
        {!openSeeAnswer && <Charts id={id} nameQuiz={choices.title} />}
        {openSeeAnswer && <SeeAnswer id={id} titleChoices={choices.title} />}
      </div>
    </Grid>
  );
}

export default AllChoiceInformation;
