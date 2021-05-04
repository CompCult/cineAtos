import Quizzes from './MiniGames';

export interface FormProps {
    handleSubmit(event: Quizzes): void;
    initialValues: Quizzes;
    isImages?: boolean;
}