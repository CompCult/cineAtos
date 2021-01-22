import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Descrição' },
    { id: 'end_message', label: 'Messagem Final' },
    { id: 'lux', label: 'lux' },
    { id: 'resources', label: 'resources' },
    { id: ACTION, label: 'Ação' },
];


export const HEAD_CELL_MISSIOES: Array<HeadCell> = [
    { id: '_user', label: 'Nome', viewAttribute: 'name' },
    { id: 'created_at', label: 'Data de submissão', format: ['date'] },
    { id: ACTION, label: 'Ação' },
];