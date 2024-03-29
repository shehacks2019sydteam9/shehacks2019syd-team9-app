import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from './App'
import history from './history'
import ProductList from './products/index.js'
import Product from './products/index.js'
import Info from "./infoPage/info.js";
import ProductInfo from './product/index.js'
export const createRoutes = () => {
  return(
    <Router history={history} component={App}>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <ProductList {...props} />}
          />
          <Route
            exact
            path="/product/:id"
            render={props => <ProductInfo {...props} />}
          />
          <Route exact path="/info" component={Info} />
        </Switch>
      </App>
    </Router>
  );
};
