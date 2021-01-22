import React, { ReactNode } from 'react';
import { NamePage, SubPage } from './HeaderStyle';
import ButtonLink from '../button/ButtonLink.component';
import { ContainerResponsive } from '../container/Container';
import Grid from '../grid/GridComponent.component';

type Props = {
    namePage?: string;
    subPage?: string;
    link?: string;
    title?: string;
    children?: ReactNode;
}

export default function Hearder({ namePage, subPage, link, title, children }: Props) {

    return (
        <ContainerResponsive>
            <ContainerResponsive marginBottom={!title ? 30 : 0}>
                <Grid justify="flex-start" alignItems="center">
                    {namePage && <NamePage>{namePage}</NamePage>}
                    {subPage && <SubPage>{subPage}</SubPage>}
                </Grid>
            </ContainerResponsive>
            <Grid>
                {(link && title) && <ButtonLink link={link} title={title} />}
            </Grid>
            {children}
        </ContainerResponsive>
    );
}
