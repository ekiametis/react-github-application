import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid } from '@material-ui/core';
import './index.css';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <Container fixed>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <App></App>
      </Grid>   
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
