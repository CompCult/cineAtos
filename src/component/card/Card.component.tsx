import React, { ReactNode } from 'react';
import { CardC, NamePage, CardCNoPadding } from './CardStyle';
import { ContainerStyled } from '../container/Container';
import Accordion from '../accordion/Accordion.component';
import { Grid } from '@material-ui/core';

interface Props {
    children?: ReactNode;
    title?: string;
    titleAccordion?: string;
    accordion?: boolean;
    botton?: number;
    noPadding?: boolean;
}

export default function ImgMediaCard({ children, title, titleAccordion, accordion, botton, noPadding }: Props) {

    const card = !noPadding ? <CardC> {children} </CardC> : <CardCNoPadding> {children} </CardCNoPadding>;
    const accordionC = <Accordion title={titleAccordion || ''}> {children} </Accordion >;

    return (
        <Grid item xs={12}>
            <ContainerStyled marginBottom={botton ?? 20}>
                {title && <NamePage>{title}</NamePage>}
                {accordion ? accordionC : card}
            </ContainerStyled>
        </Grid>
    );
}