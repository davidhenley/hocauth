import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import requireAuth from './components/require_authentication';

export default (
  <Route path="/" component={App}>
    <Route path="resources" component={requireAuth(Resources)} />
  </Route>
);
