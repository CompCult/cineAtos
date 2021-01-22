import { MouseEvent } from 'react';
import { ArraySubMenu } from './ArraySubMenu';

export interface ListPagesInterface {
    title: string;
    href?: string;
    value?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    arraySubMenu?: Array<ArraySubMenu>;
    image: any;
}
