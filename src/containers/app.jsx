import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';
import Donate from '../pages/Donate';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' render={props => <Home component={Home} title='WTF 2020' bodyClass='Home' />} />
          <Route exact path='/Donate' render={props => <Donate component={Donate} title='Donate to WTF 2020' bodyClass='Donate' />} />
          <Route render={props => <NotFound component={NotFound} title='Not Found' />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
