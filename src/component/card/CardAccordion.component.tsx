import React, { ReactNode, Children } from 'react';
import { CardStyledSub } from './CardStyle';
import GridComponent from '../grid/GridComponent.component';
import Card from './Card.component';

interface Props {
    children?: ReactNode;
    title?: string
}

const FormMunicipalityDetails = ({ children, title }: Props) => {

    const childrenList: Array<ReactNode> = Children.toArray(children);
    const childrenOne: ReactNode = childrenList[0] || <></>;

    childrenList.shift();
    return (
        <Card accordion={title ? true : false} titleAccordion={title} botton={0}>

            <GridComponent spacing={3} justify="flex-start">
                {childrenOne}
            </GridComponent>

            {childrenList.map((child: ReactNode) => { return child }) || <></>}
        </Card>
    )
}

export default FormMunicipalityDetails;
