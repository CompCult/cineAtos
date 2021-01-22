import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';
import MissionsStatus from '../../missions/interface/MissionsStatus';
import { Container, H2, Span } from './MapStyled';
import { GridComponent } from '../../../component/Component';
import { Grid } from '@material-ui/core';

function ViewPointInformation(data: MissionsStatus) {

    if (!data) {
        return <></>;
    }

    return (
        <Container>
            <H2>
                {data._mission.name}
            </H2>
            <GridComponent justify="flex-start">
                <Grid item xs={6} >
                    <Span>Lux: {data._mission.lux}</Span>
                    <Span>Resources: {data._mission.resources}</Span>
                    <Span>Imp: {data.imp}</Span>
                    <Span>People:{data.people}</Span>
                </Grid>
                <Grid item xs={6} >
                    <GridComponent justify="flex-start" alignItems="center">
                        <InfoIcon />
                        <Span>{data.status}</Span>
                    </GridComponent>
                    <GridComponent justify="flex-start" alignItems="center">
                        <AccessTimeIcon />
                    </GridComponent>
                    <GridComponent justify="flex-start" alignItems="center">
                        <LinkIcon />
                        <a style={{ textDecoration: 'none' }} href={`/missoes/minhas-missoes/${data._mission._id}/resposta/${data._id}`}><Span> Visualizar missão</Span></a>
                    </GridComponent>
                </Grid>
            </GridComponent>
        </Container>
    );
}

export default ViewPointInformation;