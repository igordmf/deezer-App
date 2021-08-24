import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Musics from '../pages/Musics/Musics';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/musicas" component={ Musics } />
    </Switch>
  )
}

export default Routes;
