import React, { useEffect, useState } from "react";
import Map from './Maps';
import GameMapApi from './GameMapApi';

function GameMap() {
    const [data, setData] = useState([]);

    useEffect(() => {
        GameMapApi.getGameMapApi()
            .then(res => {
                setData(res.data);
            });
    }, [data.length]);

    return (
        <div className='App'>
            <Map data={data} />
        </div>
    )
}

export default GameMap