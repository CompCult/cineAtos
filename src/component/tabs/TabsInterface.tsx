import { ReactNode } from 'react';

export interface TabInterface {
    nameTabs: Array<string>;
    children: ReactNode;
    disabled?: Array<number>;
    tabValue?(value: number): void;
}