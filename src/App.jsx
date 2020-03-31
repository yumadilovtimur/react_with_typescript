import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { modules } from './allModules';
import { configureRedux } from './configureRedux';

import { NewsContainer } from './modules/news/containers/NewsContainer'

const store = configureRedux({ modules, initState: {} });
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route
            render={props => {
              return (
                <NewsContainer {...props} />
              )
            }}
            path='/'
            exact
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
