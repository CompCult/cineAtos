import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import ViewPointInformation from './ViewPointInformation.component';
import MissionsStatus from '../../missions/interface/MissionsStatus';

export const GameMapComponent = ({ google, data, location_lat, location_lng }: any) => {

    const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false);
    const [activeMarker, setActiveMarker] = useState<any>();
    const [selectedPlace, setSelectedPlace] = useState<any>();

    const onMarkerClick = (props: any, marker: any) => {
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

    const markerPoints = (data: Array<MissionsStatus>) => {
        return data.map((el: MissionsStatus, index: number) => {
            return (
                //@ts-ignore
                <Marker onClick={onMarkerClick} name={ViewPointInformation(el)} position={{ lat: el.location_lat, lng: el.location_lng }} key={index} />
            )
        })
    }

    const InfoWindowMaps = () => {
        return (
            //@ts-ignore
            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                {selectedPlace ? <>{selectedPlace.name}</> : <></>}
            </InfoWindow>
        )
    }

    const marker = (location_lat: string | undefined, location_lng: string | undefined,) => {
        return (
            //@ts-ignore
            <Marker position={{ lat: location_lat, lng: location_lng }} />
        )
    }

    return (
        //@ts-ignore
        <Map google={google} zoom={14} onClick={onMapClicked} initialCenter={{ lat: location_lat || -7.230287, lng: location_lng || -35.903393 }} style={{ margin: '0% 3% 10% 3%', borderRadius: 12, height: 480 }}>
            {!data?.length ? marker(location_lat, location_lng) : markerPoints(data)}
            {!data?.length ? InfoWindowMaps() : <></>}
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0', // google maps key
    libraries: ['places'],
})(GameMapComponent);