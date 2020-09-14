import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import NotFound from '../components/Layout/NotFound';
import Home from '../pages/Home';
import Privacy from '../pages/Privacy';
import ScrollToTop from '../components/Layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path='/event/:eventTitle' render={props => <Home eventTitle={props.match.params.eventTitle} title=' - WTF 2020' bodyClass='Home' />} />
          <Route exact path='/Privacy' render={props => <Privacy title='Privacy Policy of WTF 2020' bodyClass='Privacy' />} />
          <Route exact path='/' render={props => <Home title='WTF 2020' bodyClass='Home' />} />
          <Route render={props => <NotFound component={NotFound} title='Dead Link on WTF 2020' bodyClass='404' />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
