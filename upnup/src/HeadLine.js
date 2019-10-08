import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function HeadLine() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ position: 'relative',padding: 0, margin: 0 }}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh', margin: '0'}}>
        <Typography variant="h1" component="h2" gutterBottom style={{ position: 'absolute', width: '100%', bottom:'0', left: '50%', marginLeft: '-25%'}}>
       Some Crazy Headline About chicago Music
      </Typography>
      </Typography>
      </Container>
    </React.Fragment>
  );
}
