import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SlugView } from './components/slugView';
import { SlugHeader } from './components/slugHeader';

class App extends Component {
  public render() {

    return (
      <div className="application-container">
        <SlugHeader />
        <SlugView />
      </div>
    );
  }
}

export default App;
