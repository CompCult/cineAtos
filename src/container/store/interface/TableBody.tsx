import { ReactNode } from 'react';
import Item from './Item';

export interface TableBodyInterface {
    data: Array<Item>;
    children?: ReactNode;
}