import React from 'react';
import { Span } from './MandatoryFieldSignaling';

interface Props {
    title?: string;
}

export default function MandatoryFieldSignaling({ title }: Props) {

    return (
        <>
            {title}
            <Span style={{ color: 'red' }}>*</Span>
        </>
    );
}