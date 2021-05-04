import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function TableBodyEmpty() {

    return (
        <TableBody>
            <TableRow >
                <TableCell component="th" scope="row" colSpan={12} align='center'>
                    Nenhum dado a ser exibido
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

export default TableBodyEmpty;