import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function MainContent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ position: 'relative',padding: 0, margin: 0 }}>
        <Typography component="div" style={{ backgroundColor: '#e3e3e3', height: '100vh', margin: '0'}}>
      </Typography>
      </Container>
    </React.Fragment>
  );
}
