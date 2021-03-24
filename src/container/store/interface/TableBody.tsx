import Item from './Item';

export interface TableBodyInterface {
    data: Array<Item>;
    isPupils?: boolean;
    onClick(action: 'ACTION_VIEW' | 'ACTION_EDIT' | 'ACTION_DELETE', value: string): void;
}