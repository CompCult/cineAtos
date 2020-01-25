import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MiniGamesApi from "../MiniGamesApi";
import DeleteMemories from "./DeleteMemories";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ButtomIcon } from "../../../components/buttom/Buttom";
import Grid from "@material-ui/core/Grid";
import { Title, SubTitle } from "../../../components/Title";

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

export default function PersonInformation(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const [value, setValue] = useState(0);
    const [memories, setMemories] = useState({});

    useEffect(() => {
        MiniGamesApi.getMiniGamesMemoriesInformationApi(id).then(res => {
            let memories = res.data;
            setMemories(memories);
        });
    }, [id]);

    console.log(memories)

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
                    <Title title={memories.title} />
                    <SubTitle title={memories.description} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <DeleteMemories id={id} />
                </TabPanel>
            </div>
        </Grid>
    );
}
