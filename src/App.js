import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { PrivateGourd } from './guards/PrivateGourd';
import { PublicGourd } from './guards/PublicGourd';

import Header from './components/Header';
import { Login } from './components/Login';
import { Register } from './components/Register';
import AddCard from './components/AddCard';
import CardsList from './components/CardsList';
import { Details } from './components/Details';
import { auth } from './config/firebase';
import { EditCard } from './components/EditCard';
import { Account } from './components/Account';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="App">
      <Router>
      <Header isAuth={user ? true : false} user={user} />
      
        <Switch>
          <Route exact path="/" component={CardsList} />
          <Route exact path="/all" component={CardsList} />
          <PrivateGourd authed={Boolean(user)} path='/add' component={AddCard} />
          <Route exact path="/edit/:id" component={EditCard} />
          <Route exact path="/details/:id" component={Details} />
          <PublicGourd authed={Boolean(user)} path="/login" component={Login} />
          <PublicGourd authed={Boolean(user)} path="/register" component={Register} />
          <PrivateGourd authed={Boolean(user)} path='/account' component={Account} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
