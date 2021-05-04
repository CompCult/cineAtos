import React from 'react';
import { Button } from '../../Table';
import { ActionButtonInterface } from '../interface/ActionButton';
import Tooltip from '@material-ui/core/Tooltip';

function ActionButton({ title, children, left }: ActionButtonInterface) {

    return (
        <Tooltip title={title || ''}>
            <Button marginLeft={left ?? 5}>
                {children}
            </Button>
        </Tooltip>
    );
}

export default ActionButton;