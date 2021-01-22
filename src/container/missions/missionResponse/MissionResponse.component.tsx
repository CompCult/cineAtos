import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { MissionsInterface } from '../interface/MissionsComponent';
import { Header, Card, Img, GridComponent } from '../../../component/Component';
import { getSeeAnswerMissions } from '../Missions.service';
import MissionsStatus from '../interface/MissionsStatus';
import Maps from '../../gameMap/component/Maps.component';

export default function View({ allMissions }: MissionsInterface) {

    let { id, secondaryId } = useParams<ParamTypes>();
    const [seeAnswerMissions, setSeeAnswerMissions] = useState<MissionsStatus>();
    const [request, setRequest] = useState(true);

    useEffect(() => {
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
            <Card noPadding >
                <Img src={image} alt="imageDefaultUser" maxHeight={220} maxWidth={300} />
            </Card>
        )
    }
    const text = (text: any) => {
        return (
            <Card >
                {text}
            </Card>
        )
    }

    const video = (video: any) => {
        return (
            <Card noPadding>
                <video src={video} controls style={{ width: '100%', maxWidth: 550, maxHeight: 230, borderRadius: 12 }}>
                    Seu navegador não suporta o elemento <code>video</code>.
                    </video>
            </Card >
        )
    }

    const audio = (audio: any) => {
        return (
            <Card noPadding>
                <audio src={audio} controls loop>
                    Navegador não suporta
                </audio>
            </Card>
        )
    }

    const map = (location_lat: string, location_lng: string) => {
        return (
            <Card noPadding >
                <div style={{ position: 'relative', height: 480, width: '100%' }}>
                    <Maps location_lat={location_lat} location_lng={location_lng} />
                </div>
            </Card >
        )
    }

    return (
        <Header>
            <Card>
                <div>  Usuario: {seeAnswerMissions?._user.name}</div>
                <div>  Missão: {seeAnswerMissions?._mission.name}</div>
            </Card>
            {seeAnswerMissions?.text_msg && text(seeAnswerMissions?.text_msg)}
            {seeAnswerMissions?.audio && audio(seeAnswerMissions?.audio)}


            {seeAnswerMissions?.image && image(seeAnswerMissions?.image)}

            {seeAnswerMissions?.video && video(seeAnswerMissions?.video)}

            {(seeAnswerMissions?.location_lng && seeAnswerMissions?.location_lat) && map(seeAnswerMissions?.location_lat, seeAnswerMissions.location_lng)}

        </Header>
    );
}
