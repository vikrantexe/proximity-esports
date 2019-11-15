import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Layout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
