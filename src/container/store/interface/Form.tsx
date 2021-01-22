import User from './Item';

export interface FormProps {
    handleSubmit(event: User): void;
    initialValues: User;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}