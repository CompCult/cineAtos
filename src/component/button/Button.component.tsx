import React from 'react';
import Button from '@material-ui/core/Button';
import { Props } from './interface/Button';
import { ContainerStyled } from '../container/Container';

export default function ButtonComponent({ title, type, size, disabled, onClick, fullWidth, variant }: Props) {

    return (
        <ContainerStyled marginBottom={10} >
            <Button type={type || 'submit'} size={size || 'small'} variant={variant || "contained"} color="primary" onClick={onClick} fullWidth={fullWidth || false} disabled={disabled || false} >
                {title}
            </Button>
        </ContainerStyled>
    );
}
