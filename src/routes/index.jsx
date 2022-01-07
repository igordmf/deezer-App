import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Musics from '../pages/Musics';
import Artists from '../pages/Artists';
import Albums from '../pages/Albums';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/playlist" component={ Playlist } />
      <Route exact path="/musicas" component={ Musics } />
      <Route exact path="/artistas" component={ Artists } />
      <Route exact path="/albuns" component={ Albums } />
    </Switch>
  )
}

export default Routes;
