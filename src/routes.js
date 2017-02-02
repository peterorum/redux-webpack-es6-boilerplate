import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app/app';
import WordView from 'components/word/WordView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WordView} />
  </Route>
);
