import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import { Login } from './components/Login';
import { Register } from './components/Register';
import AddCard from './components/AddCard';
import CardsList from './components/CardsList';
import { Details } from './components/Details';
import { auth } from './config/firebase';

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
          <Route exact path="/add" component={AddCard} userId={user?.uid} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
