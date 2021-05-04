import React, { ReactNode, Children } from 'react';
import { NamePage, SubPage } from './HeaderStyle';
import ButtonLink from '../button/ButtonLink.component';
import { ContainerResponsive } from '../container/Container';
import Grid from '../grid/GridComponent.component';

interface Props {
    namePage?: string;
    subPage?: string;
    link?: string;
    title?: string;
    children?: ReactNode;
    can?: boolean;
}

export default function Hearder({ namePage, subPage, link, title, children, can }: Props) {
    const childrenList: Array<ReactNode> = Children.toArray(children);
    const childrenOne: ReactNode = childrenList[0] || <></>;

    if (childrenList.length > 1) {
        childrenList.shift();
    }

    return (
        <ContainerResponsive>
            <ContainerResponsive marginBottom={(!title || !can) ? 30 : 15}>
                <Grid justify="flex-start" alignItems="center">
                    {namePage && <NamePage>{namePage}</NamePage>}
                    {subPage && <SubPage>{subPage}</SubPage>}
                </Grid>
            </ContainerResponsive>
            {childrenList.length > 1 && (
                <Grid>
                    {childrenOne}
                </Grid>
            )}
            {can && (
                <ContainerResponsive marginBottom={10}>
                    {(link && title) && <ButtonLink link={link} title={title} />}
                </ContainerResponsive>
            )}
            {childrenList.map((child: ReactNode) => { return child }) || <></>}
        </ContainerResponsive>
    );
}
