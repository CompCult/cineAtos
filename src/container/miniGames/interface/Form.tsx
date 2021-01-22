import { ChangeEvent } from 'react';
import Quizzes from './MiniGames';

export interface FormProps {
    handleSubmit(event: Quizzes): void;
    initialValues: Quizzes;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
    handleChangeImages?(event: ChangeEvent<HTMLInputElement>): void;
    images?: Array<any>;
}