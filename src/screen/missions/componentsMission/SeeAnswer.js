import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import { useHistory } from "react-router-dom";
import { Title, SubTitle } from "../../../components/Title";
import Grid from '@material-ui/core/Grid';
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import Maps from "./Maps";
import { useParams } from "react-router";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 90,
        marginBottom: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    logo: {
        marginTop: "1%",
        width: '50%',
        height: '45%',
        maxWidth: 400,
        maxHeight: 350
    },
    center: {
        textAlign: "center",
        justifyContent: "center"
    },
}));

function SeeAnswer(props) {
    const classes = useStyles();
    let history = useHistory();
    let { idMission, idSeeAnswer } = useParams();
    const isMyMission = props.isMyMission;
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

    const seeMyAnswerStatus = async myAnswerStatus => {
        const status = {
            status: myAnswerStatus
        };

        await MissionsApi.putSeeMyAnswer(idMission, idSeeAnswer, status)
            .then(res => {
                history.push("/missoes/minhas-missoes/" + idMission)
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    return (
        <div className={classes.root}>
            <Title title={"Usuário: " + user.name} />
            <SubTitle title={"Missão: " + mission.name} />

            <div className={classes.center}>

                {data.image !== undefined && (
                    <div>
                        <img src={data.image} className={classes.logo} alt="imageDefaultUser" />
                    </div>
                )}
                {data.text_msg !== undefined && <div> <p>{data.text_msg}</p> </div>}

                {(data.location_lat !== undefined && data.location_lng !== undefined) &&
                    <Maps latitude={data.location_lat} longitude={data.location_lng} />
                }
                {data.audio !== undefined &&
                    <div>
                        <audio src={data.audio} controls loop>
                            <p>Seu navegador não suporta o elemento audio </p>
                        </audio>
                    </div>
                }
            </div>

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

