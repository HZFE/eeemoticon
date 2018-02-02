import React, { Component } from 'react';
import Header from './Layout/Header';
import { setLang } from './utils/i18n';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header></Header>
        {/* <button onClick={() => setLang('en')}>English</button>
        <button onClick={() => setLang('cn')}>Chinese</button> */}
      </main>
    );
  }
}

export default App;
