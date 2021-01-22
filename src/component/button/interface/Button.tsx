import { MouseEvent } from 'react';

export interface Props {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    size?: 'small' | 'medium' | 'large';
    onClick?(e: MouseEvent<HTMLElement>): void;
    disabled?: boolean;
    fullWidth?: boolean;
}