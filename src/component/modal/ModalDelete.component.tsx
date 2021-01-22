import React, { ReactNode, MouseEvent } from 'react';
import { Span } from './ModalStyle';
import Modal from './Modal.component';
import ActionModal from './ActionModal.component';

interface Props {
    children?: ReactNode;
    open: boolean;
    handleClick(e: MouseEvent<HTMLElement>): void;
    onClickSubmit(e: MouseEvent<HTMLElement>): void;
    title: string;
}

export default function ModalDelete({ open, title, handleClick, onClickSubmit }: Props) {

    return (
        <Modal open={open} handleClick={handleClick} >
            <Span>{title}</Span>
            <ActionModal title="Sim" onClick={handleClick} titleCancel="Não" onClickSubmit={onClickSubmit} />
        </Modal>
    );
}
