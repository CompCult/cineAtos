import Item from './Item';

export interface FormProps {
    handleSubmit(event: Item): void;
    initialValues: Item;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}