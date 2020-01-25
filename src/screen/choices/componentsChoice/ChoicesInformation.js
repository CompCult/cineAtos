import React, { useState, useEffect, Fragment } from 'react';
import ChoicesApi from "../ChoicesApi.js";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ButtomIcon } from "../../../components/buttom/Buttom";
import SeeAnswer from "./SeeAnswer";
import EditQuiz from "./EditQuiz";
import DeleteQuiz from "./DeleteQuiz";
import Charts from "./Charts";

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
        width: "70%"
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Information(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const isMyChoice = props.isMyChoice;
    const [value, setValue] = useState(0);
    const [choices, setChoices] = useState({});

    useEffect(() => {
        ChoicesApi.getChoicesInformationApi(id).then(res => {
            const choice = res.data;
            setChoices(choice);
        });
    }, [id]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (isMyChoice) {
        return (
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    className={classes.tabs}
                >
                    <Tab icon={<ButtomIcon icon={"bar_chart"} title="Ver o Gráfico" />}  {...a11yProps(0)} />
                    <Tab icon={<ButtomIcon icon={"feedback"} title="Ver Resposta" />}  {...a11yProps(1)} />
                    <Tab icon={<ButtomIcon icon={"edit"} title="Editar o Quiz" />}  {...a11yProps(2)} />
                    <Tab icon={<ButtomIcon icon={"delete"} title="Deletar o Quiz" />}  {...a11yProps(3)} />
                </Tabs>

                <div className={classes.root}>
                    <TabPanel value={value} index={0}>
                        <Charts id={id} nameQuiz={choices.title} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SeeAnswer id={id} titleChoices={choices.title} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <EditQuiz quiz={choices} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <DeleteQuiz id={id} />
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
                <Tab icon={<ButtomIcon icon={"bar_chart"} title="Ver o Gráfico" />}  {...a11yProps(0)} />
                <Tab icon={<ButtomIcon icon={"feedback"} title="Ver Resposta" />}  {...a11yProps(1)} />
            </Tabs>

            <div className={classes.root}>
                <TabPanel value={value} index={0}>
                    <Charts id={id} nameQuiz={choices.title} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SeeAnswer id={id} titleChoices={choices.title} />
                </TabPanel>
            </div>
        </Grid>
    );
}
