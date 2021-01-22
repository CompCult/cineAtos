import Login from './Login';

export interface FormProps {
    handleSubmit(event: Login): void;
    initialValues: Login;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}