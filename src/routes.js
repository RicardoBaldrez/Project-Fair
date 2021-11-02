import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UserProvider } from 'common/context/User';
import { CartProvider } from 'common/context/Cart';
import { PaymentProvider } from 'common/context/Payment';

export default function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
              <Login />
          </Route>
          <CartProvider>
            <PaymentProvider>
              <Route path="/fair">
                <Feira />
              </Route>
              <Route path="/cart">
                <Carrinho />
              </Route>
            </PaymentProvider>
          </CartProvider>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}