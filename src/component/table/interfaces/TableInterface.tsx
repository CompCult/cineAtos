export type Action = 'ACTION_EDIT' | 'ACTION_DELETE' | 'ACTION_VIEW' | 'ACTION';

export type Order = 'asc' | 'desc';


export type viewAttributeBoolean = {
    primaryLabel: string;
    secundaryLabel: string;
}

export interface HeadCell {
    id: string;
    label: string;
    format?: Array<'date'>;
    viewAttribute?: string;
    viewAttributeBoolean?: viewAttributeBoolean;
}

export const ACTION_EDIT = 'ACTION_EDIT';
export const ACTION_DELETE = 'ACTION_DELETE';
export const ACTION_VIEW = 'ACTION_VIEW';
export const ACTION = 'ACTION';
export const ASC = 'asc';
export const DESC = 'desc';