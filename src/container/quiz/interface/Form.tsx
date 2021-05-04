import Quizzes from './Quizzes';

export interface FormProps {
    handleSubmit(event: Quizzes): void;
    initialValues: Quizzes;
    request?: boolean;
    onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}