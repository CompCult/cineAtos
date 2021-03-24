import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'title', label: 'Título' },
    { id: 'lux', label: 'Lux' },
    { id: 'resources', label: 'Recursos' },
    { id: 'secret_code', label: 'Código secreto' },
    { id: ACTION, label: 'Ação' },
];

export const HEAD_CELL_NO_ACTION: Array<HeadCell> = [
    { id: 'title', label: 'Título' },
    { id: 'lux', label: 'Lux' },
    { id: 'resources', label: 'Recursos' },
    { id: 'secret_code', label: 'Código secreto' }
];


export const HEAD_CELL_ANSWERS: Array<HeadCell> = [
    { id: '_user', label: 'Usuário', viewAttribute: 'name' },
    { id: '_quiz', label: 'Título do quiz', viewAttribute: 'title' },
    { id: 'answer', label: 'Opção marcada' },
    { id: 'approved', label: 'Opção correta', viewAttributeBoolean: { primaryLabel: 'Aprovado', secundaryLabel: 'Reprovado' } },
    { id: ACTION, label: 'Ação' },
]; 