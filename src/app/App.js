import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from '../constants/RoutesConstants';
import IndexPage from '../pages/IndexPage';
import UserPage from '../pages/user/UserPage';
import NotFoundPage from '../pages/others/NotFoundPage';

const App = () => {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
              <Route path='/' exact={true} component={IndexPage} />
              <Route path={ROUTES.USER_PAGE} component={UserPage} />
              <Route path={ROUTES.NOT_FOUND_PAGE} component={NotFoundPage}  />
              <Redirect from={ROUTES.ANY_PATH} to={ROUTES.NOT_FOUND_PAGE} /> 
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
