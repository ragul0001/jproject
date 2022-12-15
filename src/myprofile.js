import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,Navlink,Switch} from 'react-router-dom';
import style from "./style.css"
import About from './About';
import login from './login';
import table from './table';


class myprofile extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>

<div class="menu">
      <div class="container flex">
        {/* <!-- Mobile Button --> */}
        <div class="mobile-btn">
          <ion-icon name="grid"></ion-icon>
        </div>
        <div class="logo">
          <h1>DXC</h1>
        </div>

        <ul class="nav">
            <li class="nav-item"><Link to="/Home">Home</Link></li>
            <li class="nav-item"><Link to="/About">About us</Link></li>
            <li class="nav-item"><Link to="/myprofile">MyProfile</Link></li>
            <li class="nav-item"><Link to="/table">Table</Link></li>
          
        </ul>

        <li class="nav-item"><a href="#" class="btn"><Link to="/login">Login</Link></a></li> 
      </div>
    </div>
            </>
        )
    }
}
export default myprofile;