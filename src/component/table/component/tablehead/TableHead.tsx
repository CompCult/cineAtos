import { MouseEvent } from 'react'
import { HeadCell, Order } from '../../interfaces/TableInterface';

export interface TableHeadProps {
    onRequestSort?: (event: MouseEvent<unknown>, property: string) => void;
    order?: Order;
    orderBy?: string;
    headCells: Array<HeadCell>;
}