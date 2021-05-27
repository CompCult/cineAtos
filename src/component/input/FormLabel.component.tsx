import React, { ReactNode, memo } from 'react';
import { InputLabelStyled, FormControlStyled } from './InputStyle';
import { Grid } from '@material-ui/core';
import FieldSignaling from '../mandatoryFieldSignaling/MandatoryFieldSignaling.component';

interface Props {
    children?: ReactNode;
    title?: string;
    required?: boolean;
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
}

const FormLabel = ({ children, title, xs, sm, md, lg, required }: Props) => {

    return (
        <Grid item xs={xs || 12} sm={sm || 6} md={md} lg={lg}>
            <InputLabelStyled >
                <FieldSignaling title={title?.toLocaleUpperCase()} required={required} />
            </InputLabelStyled>
            <FormControlStyled >
                {children}
            </FormControlStyled>
        </Grid>
    )
}

export default memo(FormLabel);
