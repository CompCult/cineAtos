import React from 'react';
import { memo } from 'react';
import { Span } from './MandatoryFieldSignaling';

interface Props {
    title?: string;
    required?: boolean;
}

function MandatoryFieldSignaling({ title, required }: Props) {

    return (
        <>
            {title}
            {required && <Span style={{ color: 'red' }}> *</Span>}
        </>
    );
}

export default memo(MandatoryFieldSignaling);