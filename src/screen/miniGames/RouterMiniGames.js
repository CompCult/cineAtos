import React from "react";
import { Route, Switch } from "react-router-dom";
import Memories from './memories/Memories';
import Hangmans from './hangmans/Hangmans';
import CreateMemories from './memories/CreateMemories';
import CreateHangmans from './hangmans/CreateHangmans';
import MemoriesInformation from './memories/MemoriesInformation';
import InformationHangmans from './hangmans/InformationHangmans';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/miniGames/memoria" component={Memories} />
            <Route exact path="/miniGames/forca" component={Hangmans} />
            <Route exact path="/miniGames/criar-memoria" component={CreateMemories} />
            <Route exact path="/miniGames/criar-forca" component={CreateHangmans} />
            <Route exact path="/miniGames/informacao-memoria/:id" component={MemoriesInformation} />
            <Route exact path="/miniGames/informacao-forca/:id" component={InformationHangmans} />
        </Switch>
    );
};

export default Routes;
