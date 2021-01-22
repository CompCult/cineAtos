import User from '../interface/User';

export interface FormProps {
    handleSubmit(event: User): void;
    initialValues: User;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}