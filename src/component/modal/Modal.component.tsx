import React, { ReactNode, MouseEvent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ContainerStyled } from '../container/Container';
import { LinkButton } from '../button/ButtonStyle';
interface Props {
    children?: ReactNode;
    open: boolean;
    fullScreen?: boolean;
    handleClick(e: MouseEvent<HTMLElement>): void;
    size?: false | "sm" | "xs" | "md" | "lg" | "xl";
    title?: string;
}

export default function Modal({ children, open, handleClick, size, fullScreen, title }: Props) {

    return (
        <>
            {title && <LinkButton onClick={handleClick} variant="text"> {title} </LinkButton>}
            <Dialog onClose={handleClick} fullWidth={true} fullScreen={fullScreen || false} maxWidth={size || 'sm'} open={open}>
                <ContainerStyled marginBottom={30} marginLeft={40} marginRight={40} marginTop={30}>
                    {children}
                </ContainerStyled>
            </Dialog>
        </>
    );
}
