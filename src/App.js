import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Pizza from './components/Pizza';


const App = () => {
  
  
  return (
    <>
      <nav>
        <div className='title'>
          <Link to='/'><h1>Lambda Eats</h1></Link>
        </div>
        <div className='navLinks'>
          {/* ***Nav links here*** */}
          <Link to='/pizza'>Build a Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Pizza/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
