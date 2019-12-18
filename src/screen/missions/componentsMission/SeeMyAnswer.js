import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { TitleEdit } from "../../../components/Title";
import { getInfo, getInfo2 } from "../../Auth";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "center",
    width: "80%"
  },
  logo: {
    marginTop: "1%",
    width: "50%",
    height: "50%",
    Maxwidth: 100,
    Maxheight: 100
  },
  button: {
    marginRight: "7%"
  }
}));
function SeeMyAnswer(props) {
  const classes = useStyles();
  let history = useHistory();
  const idMission = JSON.parse(getInfo2())
  const idSeeAnswer = JSON.parse(getInfo())

  const [data, setData] = useState({});
  const [mission, setMission] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    MissionsApi.getSeeAnswerMissionsInformationApi(
      idMission,
      idSeeAnswer
    ).then(res => {
      const seeAnswer = res.data;
      setData(seeAnswer);
      setMission(res.data._mission);
      setUser(res.data._user);
    });
  }, [idMission, idSeeAnswer]);

  //arrumar isso

  const putSeeMyAnswerApproved = async () => {
    const status = {
      status: "Aprovado"
    };
    await MissionsApi.putSeeMyAnswer(idMission, idSeeAnswer, status)
      .then(res => { })
      .catch(error => {
        console.log(error.response);
      });
    setTimeout(
      () => history.replace("/missoes/minhas-missoes/" + idMission),
      10
    );
  };

  const putSeeMyAnswerRejected = async () => {
    const status = {
      status: "Rejeitado"
    };
    await MissionsApi.putSeeMyAnswer(idMission, idSeeAnswer, status)
      .then(res => { })
      .catch(error => {
        console.log(error.response);
      });
    setTimeout(
      () => history.replace("/missoes/minhas-missoes/" + idMission),
      10
    );
  };

  return (
    <div className={classes.root}>
      <TitleEdit title={"Usuário " + user.name} />
      <TitleEdit title={"Missão " + mission.name} />
      {data.image !== undefined && (
        <img src={data.image} className={classes.logo} alt="imageDefaultUser" />
      )}
      {data.text_msg !== undefined && <p>{data.text_msg}</p>}

      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={putSeeMyAnswerRejected}
      >
        Rejeitar
      </Button>
      <Button
        type="submit"
        variant="contained"
        onClick={putSeeMyAnswerApproved}
        color="primary"
      >
        Aprovar
      </Button>
    </div>
  );
}

export default SeeMyAnswer;
