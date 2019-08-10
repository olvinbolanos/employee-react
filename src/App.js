import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Employees from './Employees';
import Register from './Register'
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
      <Switch>
        <Route exact path='/' component={ Register } />
        <Route exact path='/employees' component={ Employees }/>
        <Route component={My404} />
      </Switch>
    </main>
  );
}
export default App;
