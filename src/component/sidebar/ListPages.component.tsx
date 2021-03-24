import React from 'react';
import ButtomMenuC from '../button/ButtonMenu.component';
import BootstrapButton from '../button/BootstrapButton.component';
import GridComponent from '../grid/GridComponent.component';
import { Grid } from '@material-ui/core';
import { ListPagesInterface } from './interface/ListPagesInterface';


function ListPages(props: ListPagesInterface) {
    const { title, value, arraySubMenu } = props;

    const buttomMenu = () => {
        return <ButtomMenuC {...props} />
    }

    const buttomSubMenu = (array: Array<any>) => {
        return array.map((obj: any, index: number) => {
            return <BootstrapButton key={index} title={obj.title} href={obj.href} />
        });
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <GridComponent direction="column" alignItems="center">
                {(!!arraySubMenu?.length && (title === value)) ? buttomSubMenu(arraySubMenu || []) : buttomMenu()}
            </GridComponent>
        </Grid>
    )
}
export default ListPages;