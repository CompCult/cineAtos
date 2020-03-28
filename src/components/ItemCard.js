import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import transformData from '../components/TransformData';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    float: 'left',
    "&:hover": {
      boxShadow: "0 0px 5px 5px rgb(0, 0, 0, 0.2)"
    }
  },
  selectedImage: {
    width: 250,
    height: 220,
    padding: 5
  },
  text: {
    whiteSpace: 'nowrap',
    maxWidth: 200,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

export default function MediaCard({ item }) {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = () => {
    history.push(`/loja-virtual/item/${item._id}`);
  };

  return (
    <Card className={classes.root} >
      <CardActionArea onClick={handleClick}>
        <div style={{ textAlign: 'center' }}>
          <img src={item.image} className={classes.selectedImage} alt="images" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography className={classes.text} >
            {item.description}
          </Typography>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
            <Typography variant="body2" component="p">
              {`Valor: ${item.value} Quantidade: ${item.quantity}`}
            </Typography>
          </Grid>
          <Typography variant="body2" component="p">
            {`De ${transformData(item.start_time)} Ate: ${transformData(item.end_time)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}