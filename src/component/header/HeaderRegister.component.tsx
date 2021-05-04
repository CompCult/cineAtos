import React, { ReactNode } from 'react';
import { Header, HeaderForm } from './HeaderStyle';

interface Props {
    title: string;
    children?: ReactNode;
}

export default function HearderRegister({ title, children }: Props) {
    return (
        <>
            <Header> {title} </Header>
            <HeaderForm>{children}</HeaderForm>
        </>
    );
}
