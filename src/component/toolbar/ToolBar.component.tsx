import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            [theme.breakpoints.down('xs')]: {
                marginBottom: theme.spacing(1),
            },
            backgroundColor: '#009C4E',
            color: '#FFFFFF',
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
    }),
);

type Props = {
    children?: ReactNode;
}

export default function ToolBar({ children }: Props) {
    const classes = useStyles();

    return (
        <div className={classes.toolbar} >
            {children}
        </div>
    );
}
