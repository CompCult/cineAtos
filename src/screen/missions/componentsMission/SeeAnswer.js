import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MissionsApi from "../MissionsApi";
import { useHistory } from "react-router-dom";
import { Title, SubTitle } from "../../../components/Title";
import Grid from '@material-ui/core/Grid';
import { ButtomSubmit } from "../../../components/buttom/Buttom";
import Maps from "./Maps";
import { useParams } from "react-router";
import Form from '../componentsMission/SeeAnswerForm';
import { toast } from "react-toastify";

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

const statusRejected = { status: 'Rejeitado', imp: 0, people: 0 }

function SeeAnswer(props) {
    const classes = useStyles();
    let history = useHistory();
    let { idMission, idSeeAnswer } = useParams();
    const isMyMission = props.isMyMission;
    const [data, setData] = useState({});
    const [mission, setMission] = useState({});
    const [user, setUser] = useState({});
    const [approved, setApproved] = useState(false);
    const [status, setStatus] = useState({ status: 'Rejeitado', imp: 0, people: 0 });

    const handleChangeApproved = () => {
        setApproved(true)
        setStatus({ ...status, status: 'Aprovado' })
    }

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

    const handleSubmit = async event => {
        await MissionsApi.putSeeMyAnswer(idMission, idSeeAnswer, event)
            .then(res => {
                history.push(`/missoes/minhas-missoes/${idMission}`)
                toast.success(`Missão ${event.status} com sucesso`);
            }).catch(error => {
                toast.error(`Erro ao ${event.status} Missão`);
            })
    };

    return (
        <div className={classes.root}>
            <Title title={`Usuário: ${user.name}`} />
            <SubTitle title={`Missão: ${mission.name}`} />

            <div className={classes.center}>
                {data.image && <img src={data.image} className={classes.logo} alt="imageDefaultUser" />}
                {data.text_msg && <p>{data.text_msg}</p>}

                {(data.location_lat && data.location_lng) &&
                    <Maps latitude={data.location_lat} longitude={data.location_lng} />
                }
                {data.audio && <audio src={data.audio} controls loop>Navegador não suporta</audio>}
            </div>

            {isMyMission &&
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <ButtomSubmit title="Rejeitar Missão" onClick={() => handleSubmit(statusRejected)} />
                    <ButtomSubmit title="Aprovar Missão" onClick={() => handleChangeApproved()} />
                </Grid>
            }
            {approved ? <Form handleSubmit={handleSubmit} initialValues={status} /> : <></>}
        </div>
    );
}

export default SeeAnswer;