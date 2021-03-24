import React from 'react';
import Item from '../interface/Item';
import { GridComponent } from '../../../component/Component';
import { Img, CardSteled, Span, Container, Icons } from './TableBody';
import defaultImg from '../../../assets/defaultImg.png';
import Grid from '@material-ui/core/Grid';
import { FormatDate } from '../../../utils/format/FormatDate';
import { TableBodyInterface } from '../interface/TableBody';
import { Delete, Edit, VisibilitySharp } from '@material-ui/icons';
import { ACTION_VIEW, ACTION_EDIT, ACTION_DELETE } from '../../../component/table/interfaces/TableInterface';
import ActionButton from '../../../component/table/component/tablebody/component/ActionButton.component';
import SubInfo from './SubInfo.component';

const TableBody = ({ data, isPupils, onClick }: TableBodyInterface) => {

    const buttons = (id: string) => {
        return (
            <Grid item xs={11}>
                <GridComponent justify="flex-end" alignItems="center">
                    <ActionButton title="Visualizar" left={0}>
                        <VisibilitySharp fontSize="small" color="primary" onClick={() => onClick(ACTION_VIEW, id)} />
                    </ActionButton>
                    <ActionButton title="Editar">
                        <Edit fontSize="small" color="primary" onClick={() => onClick(ACTION_EDIT, id)} />
                    </ActionButton>
                    <ActionButton title="Deletar">
                        <Delete fontSize="small" color="primary" onClick={() => onClick(ACTION_DELETE, id)} />
                    </ActionButton>
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
                        <SubInfo text="Valor:" information={item.value}></SubInfo>
                        <SubInfo text="Quantidade:" information={item.quantity}></SubInfo>
                        <SubInfo text="De:" information={FormatDate(item.start_time)}></SubInfo>
                        <SubInfo text="Até:" information={FormatDate(item.end_time) || '...'}></SubInfo>
                    </Grid>
                    {!isPupils && <Icons>{buttons(item._id || '')}</Icons>}
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