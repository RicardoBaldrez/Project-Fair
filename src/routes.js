import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UserContext } from 'common/context/User';

export default function Router() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* Provendo os valores para os componentes encapsulados */}
          <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            <Login />
          </UserContext.Provider>
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