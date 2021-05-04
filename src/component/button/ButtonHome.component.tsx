import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { FabButton } from './ButtonStyle';
import { LinkRouter } from '../link/Link';
export default function ButtonHome() {

    return (
        <LinkRouter to='/'>
            <FabButton>
                <HomeIcon />
            </FabButton>
        </LinkRouter>
    );
}
