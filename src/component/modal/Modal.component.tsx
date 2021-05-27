import React, { ReactNode, MouseEvent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Container } from '../container/Container';
import Button from '../button/Button.component';

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
            {title && <Button onClick={handleClick} title={title} />}
            <Dialog onClose={handleClick} fullWidth={true} fullScreen={fullScreen || false} maxWidth={size || 'sm'} open={open}>
                <Container margin='30px 40px'>
                    {children}
                </Container>
            </Dialog>
        </>
    );
}
