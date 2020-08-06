import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import { useHistory } from "react-router-dom";
import { Title } from "../../../components/Title";
import Grid from "@material-ui/core/Grid";
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import Maps from "./Maps";
import { useParams } from "react-router";
import Form from "./SeeAnswerForm";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
    marginBottom: "2%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    marginTop: "1%",
    width: "50%",
    height: "45%",
    maxWidth: 400,
    maxHeight: 350,
  },
  center: {
    textAlign: "center",
    justifyContent: "center",
  },
  video: {
    width: '100%',
    maxWidth: 500,
    margin: '1%'
  }
}));

const statusRejected = { status: "Rejeitado", imp: 0, people: 0 };

function SeeAnswer(props) {
  const classes = useStyles();
  let history = useHistory();
  let { idMission, idSeeAnswer } = useParams();
  const isMyMission = props.isMyMission;
  const [data, setData] = useState({});
  const [mission, setMission] = useState({});
  const [user, setUser] = useState({});
  const [approved, setApproved] = useState(false);
  const [missionInformation, setMissionInformation] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    status: "Rejeitado",
    imp: 0,
    people: 0,
  });

  const handleChangeApproved = () => {
    setApproved(true);
    setStatus({ ...status, status: "Aprovado" });
  };

  useEffect(() => {
    MissionsApi.getMissionsInformationApi(idMission).then(res => {
      setMissionInformation(res.data)
    })
    MissionsApi.getSeeAnswerMissionsInformationApi(idMission, idSeeAnswer).then(
      (res) => {
        const seeAnswer = res.data;
        setData(seeAnswer);
        setMission(res.data._mission);
        setUser(res.data._user);
      }
    );
  }, [idMission, idSeeAnswer]);

  const handleSubmit = async (event) => {
    setIsSubmitting(true);
    await MissionsApi.putSeeMyAnswer(idMission, idSeeAnswer, event)
      .then((res) => {
        history.push(`/missoes/minhas-missoes/${idMission}`);
        toast.success(`Missão ${event.status} com sucesso`);
      }).catch((error) => {
        toast.error(`Erro ao ${event.status} Missão`);
      }).finally(function () {
        setIsSubmitting(false);
      });
  };

  const entrepreneurial = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Title title={`Nome da obra: ${data.title}`} fontSize={30} />
          <Title title={`Recursos: ${data.value}`} fontSize={30} />
        </Grid>
        <div className={classes.center}>
          <ButtomSubmit title={"Enviar"} onClick={() => handleSubmit(status)} />
        </div>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <Title title={`Usuário: ${user.name}`} fontSize={40} />
      <Title title={`Missão: ${mission.name}`} fontSize={30} />

      <div className={classes.center}>
        {data.image && (
          <img
            src={data.image}
            className={classes.logo}
            alt="imageDefaultUser"
          />
        )}
        {data.text_msg && <p>{data.text_msg}</p>}

        {data.location_lat && data.location_lng && (
          <Maps latitude={data.location_lat} longitude={data.location_lng} />
        )}
        {data.video && (
          <video src={data.video} controls className={classes.video}>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        )}
        {data.audio && (
          <audio src={data.audio} controls loop>
            Navegador não suporta
          </audio>
        )}
      </div>

      {isMyMission && (
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <ButtomSubmit
            title="Rejeitar Missão"
            onClick={() => handleSubmit(statusRejected)}
            disabled={isSubmitting}
            cancel
          />
          <ButtomSubmit
            title="Aprovar Missão"
            onClick={() => handleChangeApproved()}
            disabled={isSubmitting}
            cancel
          />
        </Grid>
      )}
      {approved && (!missionInformation.isEntrepreneurial ? <Form handleSubmit={handleSubmit} initialValues={status} /> : entrepreneurial())}
    </div>
  );
}

export default SeeAnswer;
