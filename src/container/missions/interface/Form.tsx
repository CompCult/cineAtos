import Missions from './Missions';

export interface FormProps {
    handleSubmit(event: Missions): void;
    initialValues: Missions;
    request?: boolean;
    onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}