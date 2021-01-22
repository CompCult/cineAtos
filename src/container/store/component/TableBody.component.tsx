import React from 'react';
import Item from '../interface/Item';
import { GridComponent } from '../../../component/Component';
import { Img, CardSteled, Span, SubSpan, Container } from './TableBody';
import defaultImg from '../../../assets/defaultImg.png';
import Grid from '@material-ui/core/Grid';
import { FormatDate } from '../../../utils/format/FormatDate';
import { TableBodyInterface } from '../interface/TableBody';

const TableBody = ({ data, children }: TableBodyInterface) => {

    const subInfo = (text: string, information: string | number) => {
        return (
            <Grid item xs={6}>
                <GridComponent justify="flex-start" alignItems="baseline">
                    <SubSpan marginRight={5}>{text}</SubSpan>
                    <SubSpan fontSize={14}>
                        {information}
                    </SubSpan>
                </GridComponent>
            </Grid>
        )
    }

    const format = (data: Array<Item>) => {
        return data.map((item: Item, index: number) => {
            return (
                <CardSteled key={index}>
                    <Img src={item.image ? item.image : defaultImg} alt="images" />
                    <Span>{item.title}</Span>
                    <Grid container >
                        {subInfo('Valor: ', item.value)}
                        {subInfo('Quantidade: ', item.quantity)}
                        {subInfo('De: ', FormatDate(item.start_time))}
                        {subInfo('Até: ', FormatDate(item.end_time) || '...')}
                    </Grid>
                    {children}
                </CardSteled>
            );
        });
    }

    return (
        <Container>
            <GridComponent justify="center" alignItems="center">
                {format(data)}
            </GridComponent>
        </Container>
    );
}

export default TableBody;