import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { MissionsInterface } from '../interface/MissionsComponent';
import { Header, Card, Button, GridComponent } from '../../../component/Component';
import { getSeeAnswerMissions, putSeeMyAnswer, getByMissions } from '../Missions.service';
import MissionsStatus from '../interface/MissionsStatus';
import Maps from '../../gameMap/component/Maps.component';
import { Grid } from '@material-ui/core';
import { useSnackbar } from '../../../context/Snackbar';
import Missions from '../interface/Missions';
import Form from './Form.component';
import CardMissionResponse from './CardMissionResponse.component';
import { Video, Image, Audio, TextResponse } from './MissionResponse';

const statusRejected: any = { status: "Rejeitado", imp: 0, people: 0 };

export default function View({ allMissions }: MissionsInterface) {

    let { id, secondaryId } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
    const [seeAnswerMissions, setSeeAnswerMissions] = useState<MissionsStatus>();
    const [request, setRequest] = useState<boolean>(true);
    const [approved, setApproved] = useState<boolean>(false);
    const [missionInformation, setMissionInformation] = useState<Missions>();
    const [status, setStatus] = useState<any>({
        status: "Rejeitado",
        imp: 0,
        people: 0,
    });

    const handleChangeApproved = () => {
        setApproved(true);
        setStatus({ ...status, status: "Aprovado" });
    };
    useEffect(() => {
        getByMissions(id).then(res => {
            setMissionInformation(res.data)
        });
        getSeeAnswerMissions(id, secondaryId || '').then(res => {
            if (res.data) {
                setSeeAnswerMissions(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [id, secondaryId, request]);

    const image = (image: any) => {
        return (
            <CardMissionResponse title="Foto">
                <Image src={image} alt="imageDefaultUser" />
            </CardMissionResponse>
        )
    }
    const text = (text: any) => {
        return (
            <CardMissionResponse title="Texto">
                <TextResponse>
                    {text}
                </TextResponse>
            </CardMissionResponse>
        )
    }

    const video = (video: any) => {
        return (
            <CardMissionResponse title="Vídeo">
                <Video src={video} controls>
                    Seu navegador não suporta o elemento <code>video</code>.
                </Video>
            </CardMissionResponse>
        )
    }

    const audio = (audio: any) => {
        return (
            <CardMissionResponse title="Áudio" audio>
                <Audio src={audio} controls loop>
                    Navegador não suporta
                </Audio>
            </CardMissionResponse>
        )
    }

    const map = (location_lat: string, location_lng: string) => {
        return (
            <CardMissionResponse title="Localização" map>
                <div style={{ position: 'relative' }}>
                    <Maps location_lat={location_lat} location_lng={location_lng} />
                </div>
            </CardMissionResponse>
        )
    }

    const handleSubmit = async (event: any) => {
        setRequest(true);
        await putSeeMyAnswer(id, secondaryId || '', event).then((res) => {
            setSnackbar({ ...snackbar, msg: `Missão ${event.status} com sucesso!`, type: 'success' });
        }).catch((error) => {
            setSnackbar({ ...snackbar, msg: `Erro ao ${event.status} Missão`, type: 'error' });
        }).finally(function () {
            setRequest(false);
        });
    };

    const Entrepreneurial = () => {

        return (
            <div >
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <div style={{ color: 'white' }}>
                        {`Nome da obra: ${seeAnswerMissions?.title}`}
                    </div>
                    <div style={{ color: 'white' }}>
                        {`Recursos: ${seeAnswerMissions?.value}`}
                    </div>
                </Grid>
                <div>
                    <Button.ButtonForm onClick={() => handleSubmit(status)} />
                </div>
            </div>
        )
    }

    return (
        <Header namePage="Missão" subPage="Resposta da missão">
            <Card>
                <div>  Usuario: {seeAnswerMissions?._user.name}</div>
                <div>  Missão: {seeAnswerMissions?._mission.name}</div>
                <GridComponent justify="flex-start" alignItems="flex-start"  >

                    {seeAnswerMissions?.video && video(seeAnswerMissions?.video)}
                    {seeAnswerMissions?.image && image(seeAnswerMissions?.image)}
                    {(seeAnswerMissions?.location_lng && seeAnswerMissions?.location_lat) && map(seeAnswerMissions?.location_lat, seeAnswerMissions.location_lng)}

                    {seeAnswerMissions?.text_msg && text(seeAnswerMissions?.text_msg)}
                    {seeAnswerMissions?.audio && audio(seeAnswerMissions?.audio)}

                </GridComponent>
            </Card>
            <GridComponent spacing={3}>
                <Grid item>
                    <Button.ButtonC title="Rejeita Missão" onClick={() => handleSubmit(statusRejected)}></Button.ButtonC>
                </Grid>
                <Grid item>
                    <Button.ButtonC title="Aprovar Missão" onClick={() => handleChangeApproved()}></Button.ButtonC>
                </Grid>
            </GridComponent>
            {approved && (!missionInformation?.isEntrepreneurial ? <Form handleSubmit={handleSubmit} initialValues={status} /> : <Entrepreneurial />)}
        </Header>
    );
}
