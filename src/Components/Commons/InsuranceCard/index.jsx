/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, CardMedia, Typography, CardActionArea, Container, Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 328,
    background: '#FFFFFF',
    border: '1px solid #DDE3ED',
    borderRadius: '8px',
  },
  media: {
    width: '328px',
    height: '192px',
  },
  titulo: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    color: '#060B25',
  },
  parrafo: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    color: '#58606E',
    textAlign: 'justify',
  },
  label: {
    width: '52px',
    height: '20px',
    background: '#1F61F7',
    borderRadius: '4px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#F5F7FA',
    padding: '3px 7px',
    position: 'absolute',
    left: '15px',
    top: '160px',
  },
});

const InsuranceCard = ({ data }) => {
  const classes = useStyles();
  return (

    <Container>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={data.image}
                title={data.name}
                alt={data.name}
              >
                <Typography gutterBottom variant="span" component="label" className={classes.label}>
                  {data.price}
                </Typography>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="p" className={classes.titulo}>
                  {data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.parrafo}>
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
      </Grid>
    </Container>
  );
};
export default InsuranceCard;
