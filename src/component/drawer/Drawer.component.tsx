import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';
import { drawerWidthMax } from '../../utils/DrawerWidth';
import ToolBar from '../toolbar/ToolBar.component';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidthMax,
            flexShrink: 0,
            whiteSpace: 'nowrap'
        },
        drawerOpen: {
            width: drawerWidthMax,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxShadow: '8px 4px 15px rgba(50, 50, 50, 0.1)'
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 5,
            boxShadow: '10px 0px 15px rgba(50, 50, 50, 0.1)'
        },
        margin: {
            marginRight: 115
        }
    }),
);

type Props = {
    open: boolean;
    onClick(e: MouseEvent<HTMLElement>): void;
}

export default function Home({ open, onClick }: Props) {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <ToolBar>
                <Box fontStyle="normal" m={1}>
                    <Typography variant="h6" noWrap className={classes.margin}>
                        <b>Menu</b>
                    </Typography>
                </Box>
                <IconButton onClick={onClick}>
                    {open ? <Tooltip title="Fechar"><ChevronLeftIcon color="secondary" /></Tooltip> : <Tooltip title="Abrir"><MenuIcon color="secondary" /></Tooltip>}
                </IconButton>
            </ToolBar>
        </Drawer>
    );
}
