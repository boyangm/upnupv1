import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LeftPane from './leftPane';
import RightPane from './rightPane';
import Videos1 from './videoList';

export default function MainContent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ position: 'relative',padding: 0, margin: 0 }}>
        <Typography component="div" style={{ display: 'flex', position: 'relative', width: '100%', backgroundColor: '#e3e3e3', height: 'auto', margin: '0'}}>
        <LeftPane></LeftPane>
        <RightPane></RightPane>
      </Typography>
      </Container>
      <Videos1></Videos1>
    </React.Fragment>
  );
}
