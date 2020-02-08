import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MiniGamesApi from "../MiniGamesApi";
import DeleteHangmans from "./DeleteHangmans";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ButtomIcon } from "../../../components/buttom/Buttom";
import Grid from "@material-ui/core/Grid";
import { Title, SubTitle } from "../../../components/Title";
import { useParams } from "react-router";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Fragment>{children}</Fragment>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        position: "absulute",
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    center: {
        textAlign: "center"
    },
    logo: {
        width: "30%",
        height: "30%",
    }
}));

export default function InformationHangmans() {
    const classes = useStyles();
    let { id } = useParams();
    const [value, setValue] = useState(0);
    const [hangmans, setHangmans] = useState({});

    useEffect(() => {
        MiniGamesApi.getMiniGamesHangmansInformationApi(id).then(res => {
            let hangmans = res.data;
            setHangmans(hangmans);
        });
    }, [id]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab icon={<ButtomIcon icon={"info"} title="Informação do miniGame" />}  {...a11yProps(1)} />
                <Tab icon={<ButtomIcon icon={"delete"} title="Deletar miniGame" />}  {...a11yProps(2)} />
            </Tabs>

            <div className={classes.root}>
                <TabPanel value={value} index={0}>
                    <Title title={hangmans.title} />
                    <SubTitle title={hangmans.description} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <DeleteHangmans id={id} />
                </TabPanel>
            </div>
        </Grid>
    );
}
