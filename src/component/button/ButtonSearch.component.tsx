import React from 'react';
import { Container } from '../container/Container';
import GridComponent from '../grid/GridComponent.component';
import Button from './Button.component';

export default function ButtonSearch() {

    return (
        <Container margin='20px 0px'>
            <GridComponent>
                <Button type="submit" title='Pesquisar' />
            </GridComponent>
        </Container>
    );
}
