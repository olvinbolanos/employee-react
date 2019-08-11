import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Employees from './Employees';
import Login from './Login'
import Header from './Header'

const My404 = () => {
  return (
    <div>
      YOU'RE ON THE WRONG STREET, PAL
    </div>
  )
}

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/employees' component={ Employees }/>
        <Route component={My404} />
      </Switch>
    </main>
  );
}
export default App;
