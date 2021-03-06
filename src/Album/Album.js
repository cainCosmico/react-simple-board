import React, { useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles( ( theme ) => ( {
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  const randomCurrentCount = 0;
  const randomAvalible = 0;
  const randomTimeWait = 0;
  const min=0;
  const max=100;

  const [ counter,setCounter ]   = useState( randomCurrentCount );
  const [ avalible,setAvalible ] = useState( randomAvalible );
  const [ wait,setWait ]         = useState( randomTimeWait );

  const timer = () => {
    let aux = min + Math.random() * (max - min);
    aux = parseInt(aux);
    console.log('CAlling timer: ',aux);

    setCounter( aux );
    setAvalible( avalible+1 );
    setWait( wait+1 );
  }
  
  const handleRandom = () => {
    timer();
  }

  


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sistema de Aforo
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <b>Pase adelante </b>
              el aforo en nuestro establecimiento esta disponible.
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}> */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Conteo actual
                    </Typography>
                    <Typography>
                      { counter }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>              
              
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-appreciate-png-image_1699900.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Disponible
                    </Typography>
                    <Typography>
                      { avalible }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>              
              
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://image.shutterstock.com/image-vector/business-people-waiting-job-interview-260nw-699839041.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tiempo aprox espera
                    </Typography>
                    <Typography component="h1">
                      {  wait }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <button onClick={ handleRandom }>Click me plisssss</button>

            {/* ))} */}
          </Grid>
        </Container>
      </main>

    </React.Fragment>
  );
}