import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    color: 'blue'
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Typography className={classes.title} variant="h1" component="h2">
          Sobre
          </Typography>
        <Typography variant="body1" component="p">
          A casa do código é uma editora que desenvolve e edita livros em diversos formatos.
          </Typography>
      </Container>
    </>
  );
}

export default About;