import { MouseEvent, ReactNode } from 'react';

export interface ButtonInterface {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    size?: 'small' | 'medium' | 'large';
    onClick?(e: MouseEvent<HTMLElement>): void;
    disabled?: boolean;
    fullWidth?: boolean;
    color?: 'primary' | 'secondary';
    icon?: ReactNode;
    margin?: string;
    variant?: 'outlined' | 'contained' | ''
}