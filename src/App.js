import logo from './logo.svg';
import React, { Fragment } from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import WithPhoto from './components/body/WithPhoto';
import Download from './components/footer/Download';

function App() {
  return (
    <Router>
      <Header />
      <WithPhoto />
      <Download />
    </Router>
  );
}

export default App;
