import React, { ReactNode } from 'react';
import { AvatarStyled } from '../avatar/AvatarStyled';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '../grid/GridComponent.component';

interface AvatarInterface {
    titleAvatar: string;
    title: string;
    subTitle?: string;
    children?: ReactNode;
}

export default function Avatar({ titleAvatar, title, subTitle, children }: AvatarInterface) {
    return (
        <Grid justify="center" alignItems="center" >
            <CardHeader
                avatar={
                    <AvatarStyled>
                        {titleAvatar}
                    </AvatarStyled>
                }
                title={title}
                subheader={subTitle || ''}
            />
            {children}
        </Grid >
    );
}
