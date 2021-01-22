import React, { MouseEvent } from 'react';
import { Button } from '../../component/Component';
import { ContainerStyled } from '../container/Container';
import Grid from "../grid/GridComponent.component";

interface Props {
    title: string;
    titleCancel?: string;
    type?: 'submit' | 'button';
    size?: 'small' | 'medium' | 'large';
    onClick?(e: MouseEvent<HTMLElement>): void;
    onClickSubmit?(e: MouseEvent<HTMLElement>): void;
}

export default function ActionModal({ title, titleCancel, onClick, onClickSubmit }: Props) {

    return (
        <Grid>
            <ContainerStyled marginRight={10}>
                <Button.ButtonC type="button" title={titleCancel || 'Cancelar'} onClick={onClick} />
            </ContainerStyled>
            <Button.ButtonC title={title} onClick={onClickSubmit} />
        </Grid>
    );
}
