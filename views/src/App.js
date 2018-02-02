import React, { Component } from 'react';
import Header from './Layout/Header';
import Home from './Layout/Home/';
import Footer from './Layout/Footer';
import { setLang } from './utils/i18n';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import * as Routes from './Routes';

import './style/index.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Routes.HomePage}/>
            <Route path="/search" component={Routes.SearchPage} />
          </Switch>
          
          {/* <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/> */}
          <Footer></Footer>
          {/* <button onClick={() => setLang('en')}>English</button>
          <button onClick={() => setLang('cn')}>Chinese</button> */}
        </main>
      </Router>
    );
  }
}

export default App;
