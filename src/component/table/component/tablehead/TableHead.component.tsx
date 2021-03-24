import React, { MouseEvent } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Span } from '../Table';
import { TableHeadProps } from './TableHead';
import { ASC, DESC } from '../../interfaces/TableInterface';

function EnhancedTableHead(props: TableHeadProps) {
    const { order, orderBy, onRequestSort, headCells } = props;

    const createSortHandler = (property: string) => (event: MouseEvent<unknown>) => {
        if (onRequestSort) {
            onRequestSort(event, property);
        }
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : ASC}
                            onClick={createSortHandler(headCell.id)}
                            disabled={!order && !orderBy}
                        >
                            {headCell.label}
                            {(orderBy === headCell.id) ? (
                                <Span>
                                    {order === DESC ? 'sorted descending' : 'sorted ascending'}
                                </Span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;