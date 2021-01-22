import Missions from './Missions';

export interface FormProps {
    handleSubmit(event: Missions): void;
    initialValues: Missions;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}