import React, { useState, useEffect, Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ButtomIcon } from "../../../components/buttom/Buttom";
import MissionsApi from "../MissionsApi.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteMission from "../componentsMission/DeleteMission";
import EditMission from "../componentsMission/EditMission";
import StatusMission from "../componentsMission/StatusMission";

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
}));

export default function Information({ isMyMission, id }) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [mission, setMissions] = useState({});

    useEffect(() => {
        MissionsApi.getMissionsInformationApi(id).then(res => {
            const missions = res.data;
            setMissions(missions);
        });
    }, [id]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (isMyMission) {
        return (
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    className={classes.tabs}
                >
                    <Tab icon={<ButtomIcon icon={"sentiment_dissatisfied"} title="Missões Pendentes" />}  {...a11yProps(0)} />
                    <Tab icon={<ButtomIcon icon={"sentiment_satisfied_alt"} title="Missões Aprovadas" />}  {...a11yProps(1)} />
                    <Tab icon={<ButtomIcon icon={"sentiment_very_dissatisfied"} title="Missões Rejeitadas" />}  {...a11yProps(2)} />
                    <Tab icon={<ButtomIcon icon={"edit"} title="Editar a missão" />}  {...a11yProps(3)} />
                    <Tab icon={<ButtomIcon icon={"delete"} title="Deletar a missão" />}  {...a11yProps(4)} />
                </Tabs>

                <div className={classes.root}>
                    <TabPanel value={value} index={0}>
                        <StatusMission id={id} status={"Pendente"} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <StatusMission id={id} status={"Aprovado"} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <StatusMission id={id} status={"Rejeitado"} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <EditMission mission={mission} />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <DeleteMission id={id} />
                    </TabPanel>
                </div>
            </Grid>
        )
    }

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab icon={<ButtomIcon icon={"sentiment_satisfied_alt"} title="Missões Aprovadas" />}  {...a11yProps(0)} />
                <Tab icon={<ButtomIcon icon={"sentiment_dissatisfied"} title="Missões Pendentes" />}  {...a11yProps(1)} />
                <Tab icon={<ButtomIcon icon={"sentiment_very_dissatisfied"} title="Missões Rejeitadas" />}  {...a11yProps(2)} />
            </Tabs>

            <div className={classes.root}>
                <TabPanel value={value} index={0}>
                    <StatusMission id={id} status={"Aprovado"} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <StatusMission id={id} status={"Pendente"} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <StatusMission id={id} status={"Rejeitado"} />
                </TabPanel>
            </div>
        </Grid>
    );
}
