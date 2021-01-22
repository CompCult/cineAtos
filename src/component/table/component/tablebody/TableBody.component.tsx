import React, { useState, ChangeEvent } from 'react';
import { TableBody, TableCell, TableRow, TextField } from '@material-ui/core';
import { Delete, Create, VisibilitySharp, Done, Close } from '@material-ui/icons';
import { Button } from '../Table';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW, ACTION } from '../../interfaces/TableInterface';
import TableEmpty from './component/TableEmpty.component';
import { TableBodyProps } from './interface/TableBody';
import { HeadCell } from '../../interfaces/TableInterface';
import { ValueEdit } from './interface/ValueEdit';
import { createRow } from './component/CreateRow';
import formatValues from './format/FormatValues';
import ActionButton from './component/ActionButton.component';

function TableBodyComponent(props: TableBodyProps) {

    const { data, actionColumns, handleClickAction, headCells, noActionEdit, noActionDelete, noActionView, editable } = props;

    const [newValue, setNewValue] = useState<ValueEdit>({ values: undefined, index: -1 });
    const [valuePrevious, setValuePrevious] = useState<any>({});

    const handleClick = (action: Action, value: Object, index?: number) => {
        handleClickAction && handleClickAction(action, value, index);

        if (editable && action === ACTION_EDIT) {
            //deep copy of the object's value, creating a new object reference
            setValuePrevious(JSON.parse(JSON.stringify(value)));

            //deep copy of the object's value, creating a new object reference
            setNewValue({ ...newValue, values: JSON.parse(JSON.stringify(value)), index: index ?? -1 });
        }
    }

    const closeEdit = () => {
        handleClickAction && handleClickAction(ACTION_EDIT, newValue.values, newValue.index);
        setNewValue({ ...newValue, values: undefined, index: undefined });
    }

    const cancelEdit = () => {
        setNewValue({ ...newValue, values: valuePrevious, index: undefined });
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const valueAux: any = newValue.values;
        valueAux[event.target.name] = event.target.value.trim() || valuePrevious[event.target.name];
        setNewValue({ ...newValue, values: valueAux, index: index });
    }

    const rowList: Array<HeadCell> = createRow([...headCells]);

    const action: boolean = [...headCells][headCells.length - 1].id === ACTION;

    const viewAttribute = (obj: any, attribute: string): string => {
        return obj[attribute];
    }

    if (![...data].length) {
        return <TableEmpty />
    }

    return (
        <TableBody>
            {[...data].map((row: any, index: number) => (
                <TableRow key={`TableRow-${index}`}>
                    {rowList.map((keys: HeadCell, indexKeys: number) => {
                        let actionRow: boolean = !!actionColumns && actionColumns === indexKeys + 1;

                        let value: string = formatValues(keys, row[keys.id], row);

                        if (editable && index === newValue.index) {
                            return (
                                <TableCell component="th" scope="row" key={`TableRow-${index} - TableCell${indexKeys}`}>
                                    <TextField fullWidth id={`InputTableRow-${index} - InputTableCell${indexKeys}`} defaultValue={value} name={keys.id} onChange={(data: ChangeEvent<HTMLInputElement>) => onChange(data, index)} />
                                </TableCell>
                            );
                        }

                        return (
                            <TableCell component="th" scope="row" key={`TableRow-${index} - TableCell${indexKeys}`}>
                                {actionRow ? <Button onClick={() => handleClick(ACTION, row, index)}>{value}</Button> : value}
                            </TableCell>
                        );
                    })}

                    {action && (
                        <TableCell component="th" scope="row" key={`TableRowAction-${index}`} width={80}>
                            {(!noActionDelete && (index !== newValue.index)) &&
                                <ActionButton title="Deletar" left={0}>
                                    <Delete fontSize="small" color="primary" onClick={() => handleClick(ACTION_DELETE, row, index)} />
                                </ActionButton>
                            }

                            {(!noActionEdit && (index !== newValue.index)) &&
                                <ActionButton title="Editar">
                                    <Create fontSize="small" color="primary" onClick={() => handleClick(ACTION_EDIT, row, index)} />
                                </ActionButton>
                            }

                            {(!noActionView && (index !== newValue.index)) &&
                                <ActionButton title="Visualizar">
                                    <VisibilitySharp fontSize="small" color="primary" onClick={() => handleClick(ACTION_VIEW, row, index)} />
                                </ActionButton>
                            }

                            {index === newValue.index &&
                                <ActionButton title="Concluir">
                                    <Done fontSize="default" color="primary" onClick={() => closeEdit()} />
                                </ActionButton>
                            }

                            {index === newValue.index &&
                                <ActionButton title="Cancelar">
                                    <Close fontSize="default" color="primary" onClick={() => cancelEdit()} />
                                </ActionButton>
                            }
                        </TableCell>
                    )}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TableBodyComponent;