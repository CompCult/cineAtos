import { ReactNode } from 'react';

export interface FormInterface<T> {
    handleSubmitForm(event: T): void;
    initialValues: T;
    disabled?: boolean;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    children?: ReactNode;
    request?: boolean;
}