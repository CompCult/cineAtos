import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    marginButton: {
        width: "50%",
        height: "50%",
        Maxwidth: 100,
        Maxheight: 100,
        marginBottom: 10
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenDialog = ({ google, onMarkerClick, latitude, longitude }) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" size="large" className={classes.marginButton} color="primary" onClick={handleClickOpen}>
                Mapa
             </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Map google={google} initialCenter={{ lat: latitude, lng: longitude }} zoom={16}>
                    <Marker onClick={onMarkerClick} name={'Current location'} />
                </Map>
            </Dialog>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0', // google maps key
    libraries: ['places'],
})(FullScreenDialog);