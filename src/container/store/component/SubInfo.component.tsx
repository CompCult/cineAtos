import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GridComponent } from '../../../component/Component';
import { SubSpan } from './TableBody';

interface SubInfoInterface {
    text: string;
    information: string | number;
    xs?: 6 | 12;
}

const SubInfo = ({ text, information, xs }: SubInfoInterface) => {
    return (
        <Grid item xs={xs || 6}>
            <GridComponent justify="flex-start" alignItems="baseline">
                <SubSpan marginRight={5}>{text}</SubSpan>
                <SubSpan fontSize={14}>
                    {information}
                </SubSpan>
            </GridComponent>
        </Grid>
    )
}

export default SubInfo;