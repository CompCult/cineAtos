import React from 'react';
import { ContainerStyled } from '../container/Container';
import { Button, GridComponent } from '../Component';

export default function ButtonSearch() {

    return (
        <ContainerStyled marginBottom={20} marginTop={20}>
            <GridComponent>
                <Button.ButtonC type="submit" title={'Pesquisar'} />
            </GridComponent>
        </ContainerStyled>
    );
}
