import React, { ReactNode } from 'react';
import { CardStyled, Text, Container } from './MissionResponse';

interface Props {
    children: ReactNode;
    title: string;
    audio?: boolean;
    map?: boolean;
}

const CardMissionResponse = ({ title, audio, map, children }: Props) => {

    return (
        <Container>
            <Text>{title}</Text>
            <CardStyled audio={audio} map={map} >
                {children}
            </CardStyled >
        </Container>
    );
}
export default CardMissionResponse;