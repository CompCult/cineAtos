import { ChangeEvent } from 'react';

export interface Pagination {
    size?: number;
    page: number;
    rowsPerPage: number;
    onChangePage?(event: unknown, newPage: number): void;
    onChangeRowsPerPage?(event: ChangeEvent<HTMLInputElement>): void;
}