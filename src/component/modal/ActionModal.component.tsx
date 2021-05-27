import React, { MouseEvent } from 'react';
import Button from '../button/Button.component';
import { ContainerStyled } from '../container/Container';
import GridComponent from "../grid/GridComponent.component";

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
        <GridComponent top={30}>
            <ContainerStyled marginRight={10} >
                <Button type="button" title={titleCancel || 'Cancelar'} color='secondary' onClick={onClick} />
            </ContainerStyled>
            <Button title={title} onClick={onClickSubmit} />

        </GridComponent>
    );
}
