import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';

import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;