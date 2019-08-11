import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Employees from './Employees';
import Register from './Register'
import Login from './Login'
import Header from './Header'
import FourZeroFour from './404'

const My404 = () => {
  return (
    <div>
    <FourZeroFour/>
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
        <Route exact path='/register' component={ Register } />
        <Route component={My404} />
      </Switch>
    </main>
  );
}
export default App;
