import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDescription from '../pages/ProductDescription';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/product/:id' component={ProductDescription} />
      <Route path='*'><Redirect to='/' /></Route>
    </Switch>
  );
}