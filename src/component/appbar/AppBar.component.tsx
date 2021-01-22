import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "../grid/GridComponent.component";
import { Text, Title, AppBarSteled } from './AppBarStyle';
import { LinkRouter } from '../link/Link';

export default function MiniDrawer() {

    return (
        <AppBarSteled>
            <Toolbar>
                <Grid justify="space-between" alignItems="flex-start">
                    <LinkRouter to='/' >
                        <Title>LerAtos</Title>
                    </LinkRouter>
                    <Text>Estúdio de Criação LerAtos</Text>
                </Grid>
            </Toolbar>
        </AppBarSteled>
    );
}
