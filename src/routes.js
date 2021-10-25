import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UserProvider } from 'common/context/User';

export default function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserProvider>
            <Login />
          </UserProvider>
        </Route>
        <Route path="/fair">
          <Feira />
        </Route>
        <Route path="/cart">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}