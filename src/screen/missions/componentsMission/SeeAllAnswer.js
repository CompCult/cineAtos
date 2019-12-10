import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import { TitleEdit } from "../../../components/Title";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "center",
    width: "80%"
  },
  logo: {
    width: "30%",
    height: "30%",
    maxwidth: 100,
    maxheight: 100
  }
}));
function SeeAllAnswer(props) {
  const classes = useStyles();
  let id = props.match.params;
  const [data, setData] = useState({});
  const [mission, setMission] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    MissionsApi.getSeeAnswerMissionsInformationApi(
      id.idMission,
      id.idSeeAnswer
    ).then(res => {
      const seeAnswer = res.data;
      setData(seeAnswer);
      setMission(res.data._mission);
      setUser(res.data._user);
    });
  }, [id.idMission, id.idSeeAnswer]);
  console.log(data);

  return (
    <div className={classes.root}>
      <TitleEdit title={"Usuário " + user.name} />
      <TitleEdit title={"Missão " + mission.name} />
      {data.image !== undefined && (
        <img src={data.image} className={classes.logo} alt="imageDefaultUser" />
      )}
      {data.text_msg !== undefined && <p>{data.text_msg}</p>}
    </div>
  );
}

export default SeeAllAnswer;
