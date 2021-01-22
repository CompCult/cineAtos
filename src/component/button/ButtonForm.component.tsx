import React, { MouseEvent } from 'react';
import Button from './Button.component';
import { ContainerStyled } from '../container/Container';
import Grid from "../grid/GridComponent.component";
import { LinkRouter } from '../link/Link';
import { Container } from './ButtonStyle';

type Props = {
    link?: string;
    disabled?: boolean;
    marginBottom?: number;
    onClick?(e: MouseEvent<HTMLElement>): void;
    onClickCancel?(e: MouseEvent<HTMLElement>): void;
}

export default function ButtonForm({ link, disabled, marginBottom, onClick, onClickCancel }: Props) {

    return (
        <ContainerStyled marginBottom={marginBottom ? marginBottom : 30} marginTop={20}>
            <Grid>
                <Container>
                    {link && <LinkRouter to={link}> <Button type="button" title={'Cancelar'} /> </LinkRouter>}
                    {!link && <Button type="button" title={'Cancelar'} onClick={onClickCancel} />}
                </Container>
                {!onClick && <Button type="submit" title={'salvar'} disabled={disabled} />}
                {onClick && <Button type="button" title={'salvar'} disabled={disabled} onClick={onClick} />}
            </Grid>
        </ContainerStyled>
    );
}
