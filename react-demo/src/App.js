import React from 'react';
import logo from './logo.svg';
import Login from './components/login.jsx'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import {Switch, BrowserRouter, HashRouter, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
        <HashRouter> 
          <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/main" component={Main}></Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
