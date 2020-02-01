import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import { useHistory } from "react-router-dom";
import { Title, SubTitle } from "../../../components/Title";
import Grid from '@material-ui/core/Grid';
import { ButtomSubmit } from "../../../components/buttom/Buttom";

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
}));

function SeeAnswer(props) {
    const classes = useStyles();
    let history = useHistory();
    const id = props.match.params;
    const isMyMission = props.isMyMission;
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

    const seeMyAnswerStatus = async myAnswerStatus => {
        const status = {
            status: myAnswerStatus
        };

        await MissionsApi.putSeeMyAnswer(id.idMission, id.idSeeAnswer, status)
            .then(res => { })
            .catch(error => {
                console.log(error.response);
            });
        setTimeout(
            () => history.replace("/missoes/minhas-missoes/" + id.idMission),
            10
        );
    };

    return (
        <div className={classes.root}>
            <Title title={"Usuário " + user.name} />
            <SubTitle title={"Missão " + mission.name} />

            {data.image !== undefined && (
                <img src={data.image} className={classes.logo} alt="imageDefaultUser" />
            )}
            {data.text_msg !== undefined && <p>{data.text_msg}</p>}

            {(data.location_lat !== undefined && data.location_lng !== undefined) &&
                <div>

                </div>
            }
            {isMyMission &&
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <ButtomSubmit title="Rejeitar Missão" onClick={() => seeMyAnswerStatus('Rejeitado')} />
                    <ButtomSubmit title="Aprovar Missão" onClick={() => seeMyAnswerStatus('Aprovado')} />
                </Grid>
            }
        </div>
    );
}

export default SeeAnswer;
