import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function HeadLine() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ position: 'relative',padding: 0, margin: 0 }}>
        <Typography component="div" style={{ display:'flex', justifyContent:'center',  alignItems:'flex-end', backgroundColor: '#cfe8fc', height: '60vh', margin: '0'}}>
        <Typography variant="h1" component="h2" gutterBottom style={{ position: 'relative'}}>
       Some Crazy Head
      </Typography>
      </Typography>
      </Container>
    </React.Fragment>
  );
}
