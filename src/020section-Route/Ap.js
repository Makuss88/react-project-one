import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './component/MainHeader';
import ProductDetails from './pages/ProductDeatils';

const App = () => {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="welcome" />
          </Route>
          <Route path="/welcome" >
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId" >
            <ProductDetails />
          </Route>

        </Switch>
      </main>

    </div>
  );
};

export default App;
