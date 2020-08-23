import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { transformData, getHourFromDate } from '../../components/TransformData';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import LinkIcon from '@material-ui/icons/Link';

export const FullScreenDialog = ({ google, data }) => {
    const [showingInfoWindow, setShowingInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (props, marker) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }

    const onMapClicked = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    };

    const viewPointInformation = (data) => {
        if (!data._mission) {
            return <></>
        }

        return (
            <div style={{ minWidth: 200, margin: 20 }}>
                <h2 style={{ textAlign: 'center', marginTop: -10 }}>
                    {data._mission.name.toUpperCase()}
                </h2>
                <div>
                    lux: {data._mission.lux}
                </div>
                <div>
                    resources: {data._mission.resources}
                </div>
                <div>
                    imp: {data.imp}
                </div>
                <div>
                    people:{data.people}
                </div>
                <Grid container direction="row" justify="flex-start" alignItems="center"  >
                    <InfoIcon />
                    {data.status}
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="center"  >
                    <AccessTimeIcon />
                    {` ${transformData(data.created_at)} ${getHourFromDate(data.created_at)}`}
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="center"  >
                    <LinkIcon />
                    <a style={{ textDecoration: 'none' }} href={`/missoes/minhas-missoes/${data._mission._id}/resposta/${data._id}`}> Visualizar missão</a>
                </Grid>
            </div>
        )
    }

    const markerPoints = (data) => {
        return data.map((el, index) => {
            return (
                <Marker onClick={onMarkerClick} name={viewPointInformation(el)} position={{ lat: el.location_lat, lng: el.location_lng }} key={index} />
            )
        })
    }

    return (
        <Map google={google} zoom={14} onClick={onMapClicked} initialCenter={{ lat: -7.230287, lng: -35.903393 }} style={{ margin: '1%', borderRadius: 12 }}>

            {markerPoints(data)}

            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                <>{selectedPlace.name}</>
            </InfoWindow>
        </Map>

    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0', // google maps key
    libraries: ['places'],
})(FullScreenDialog);