import Quizzes from './Quizzes';

export interface FormProps {
    handleSubmit(event: Quizzes): void;
    initialValues: Quizzes;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}