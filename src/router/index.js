import React from 'react'
import { Switch , Route } from 'react-router-dom'
import Home from '../Views/Home'

function Router() {
  return(
    <div>
      <Switch>
    <Route exact path='/' component ={Home}/>
    
  

  
  
  </Switch>
    
    </div>
    );
}

export default Router;