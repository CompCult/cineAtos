import React, { ReactNode, MouseEvent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ContainerStyled } from '../container/Container';

interface Props {
    children?: ReactNode;
    open: boolean;
    fullScreen?: boolean;
    handleClick(e: MouseEvent<HTMLElement>): void;
    size?: false | "sm" | "xs" | "md" | "lg" | "xl";
}

export default function Modal({ children, open, handleClick, size, fullScreen }: Props) {

    return (
        <Dialog onClose={handleClick} fullWidth={true} fullScreen={fullScreen || false} maxWidth={size || 'sm'} open={open}>
            <ContainerStyled marginBottom={30} marginLeft={40} marginRight={40} marginTop={30}>
                {children}
            </ContainerStyled>
        </Dialog>
    );
}
