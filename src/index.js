import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Navlink,Switch} from 'react-router-dom';
import Home from "./Home";
import About from './About';
import login from './login';
import myprofile from './myprofile';
import table from './table';
const routing=(
     <Router> 
        
         <div>
          <Switch>
             <Route exact path='/login' component={login}/>
             <Route exact path='/' component={Home}/>
             <Route exact path='/About' component={About}/>
             <Route exact path='/myprofile' component={myprofile}/>
             <Route exact path='/table' component={table}/>
          </Switch>
             
         </div>
        
     </Router>
);

ReactDOM.render(routing,document.getElementById('root'));