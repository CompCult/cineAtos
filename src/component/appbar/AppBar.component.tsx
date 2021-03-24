import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "../grid/GridComponent.component";
import { Text, Title, AppBarSteled, AvatarMenu } from './AppBarStyle';
import { LinkRouter } from '../link/Link';
import Avatar from '../avatar/Avatar.component';
import { logout, getToken } from '../../core/auth/auth';
import { formatName } from '../../utils/format/FormatName';

export default function MiniDrawer() {

    return (
        <AppBarSteled>
            <Toolbar>
                <Grid justify="space-between" alignItems="center">
                    <LinkRouter to='/' >
                        <Title>LerAtos</Title>
                    </LinkRouter>
                    <Text>Estúdio de Criação LerAtos</Text>
                    <Grid justify="flex-end" alignItems="flex-end">
                        <AvatarMenu>
                            <Avatar titleAvatar={formatName(getToken().name)} title={getToken().name} >
                                <LinkRouter to='/login' onClick={logout}>Sair</LinkRouter>
                            </Avatar>
                        </AvatarMenu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBarSteled>
    );
}
