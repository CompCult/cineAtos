import React, { ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContainerStyled } from '../container/Container';

interface Props {
    direction?: "row" | "column";
    justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    children: ReactNode;
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
    top?: number;
}

export default function GridComponent({ direction, justify, alignItems, children, spacing, top }: Props) {

    return (
        <ContainerStyled marginTop={top || 0}>
            <Grid container direction={direction || "row"} justify={justify || "flex-end"} alignItems={alignItems || "flex-start"} spacing={spacing || 0}>
                {children}
            </Grid>
        </ContainerStyled>
    );
}
