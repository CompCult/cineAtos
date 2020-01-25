import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonApi from "./PersonApi.js";
import EditPerson from "./componentsPerson/EditPerson";
import DeletePerson from "./componentsPerson/DeletePerson";
import imageDefaultUser from "../../images/imageDefaultUser.png";
import { Title } from "../../components/Title";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ButtomIcon } from "../../components/buttom/Buttom";
import Grid from "@material-ui/core/Grid";

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
  const [person, setPerson] = useState({});

  useEffect(() => {
    PersonApi.getPersonInformationApi(id).then(res => {
      let person = res.data;
      setPerson(person);
    });
  }, [id]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const title = (
    <div className={classes.center}>
      <Title title={person.name} />
      <img
        src={imageDefaultUser}
        className={classes.logo}
        alt="imageDefaultUser"
      />
    </div>
  );

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab icon={<ButtomIcon icon={"info"} title="Informação usuário" />}  {...a11yProps(1)} />
        <Tab icon={<ButtomIcon icon={"edit"} title="Atualizar usuário" />}  {...a11yProps(2)} />
        <Tab icon={<ButtomIcon icon={"delete"} title="Deletar usuário" />}  {...a11yProps(3)} />
      </Tabs>

      <div className={classes.root}>
        <TabPanel value={value} index={0}>
          {title}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EditPerson person={person} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DeletePerson id={id} />
        </TabPanel>
      </div>
    </Grid>
  );
}
