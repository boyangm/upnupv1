import React from 'react';
import './App.css';
import SearchAppBar from './home';
import HeadLine from './HeadLine';
import MainContent from './mainContent';


function App() {
  return (
    <div>
    <SearchAppBar></SearchAppBar>
    <HeadLine></HeadLine>
    <MainContent></MainContent>

    </div>
   
  );
}

export default App;
