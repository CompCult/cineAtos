import { Action, HeadCell } from '../../../interfaces/TableInterface';

export interface TableBodyProps {
    data: Array<Object>;
    actionColumns?: number;
    handleClickAction?(action: Action, value: Object | undefined, index?: number): void;
    headCells: Array<HeadCell>;
    noActionDelete?: boolean;
    noActionEdit?: boolean;
    noActionView?: boolean;
    editable?: boolean;
}