import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Navlink,Switch} from 'react-router-dom';
import style from "./style.css"
import Home from './Home';
import myprofile from './myprofile';
import table from './table';

class About extends React.Component{
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
            <li class="nav-item"><Link to="/">Home</Link></li>
            <li class="nav-item"><Link to="/About">About us</Link></li>
            <li class="nav-item"><Link to="/">MyProfile</Link></li>
            <li class="nav-item"><Link to="/">Table</Link></li>
          
        </ul>

        <li class="nav-item"><a href="#" class="btn"><Link to="/login">Login</Link></a></li> 
      </div>
    </div>
           <div class="section" id="why-us">
      <div class="container flex">
        <div class="text">
          <h2 class="primary mb">Why Choose Us?</h2>
          <h3 class="secondary mb">Consulatation with Expert.</h3>
          <p class="tertiary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos
            maxime tempore?
          </p>

          <h3 class="secondary mb">Consulatation with Expert.</h3>
          <p class="tertiary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos
            maxime tempore?
          </p>
        </div>
        <div class="visual">
        <img src="https://assets.stickpng.com/images/5eb3c54ec8c459000443513b.png" alt="Body Pump @ Gold's Gym Goleta - Gold's Gym@pngkey.com"/>
        </div>
      </div>
    </div>
    
    <div class="section" id="testimonial">
      <div class="container flex">
        <div class="text">
          <h2 class="primary">
            That's What Our Super <br />
            Client Says
          </h2>

          <br />
          <br />
          <br />

          <div class="client">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg"
              alt=""
            />
            <h2 class="secondary">Exelent Training</h2>
            <p class="tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptatem ad, repudiandae voluptates odio deleniti
              reiciendis in veniam quidem expedita maxime error fugit. Pariatur
              quasi sunt aut id. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Neque, officiis.
            </p>
          </div>
        </div>
        <div class="visual">
          <img
            src="https://png2.cleanpng.com/sh/687d2fd534b06a2aaf1001dd8d3af0bd/L0KzQYm3VcA5N6Zmj5H0aYP2gLBuTfd6dZ9miAZyY4OweLL1hQN1aZ9pRdRqbHHxc7a0gvVidV54iN5ydD32gLF5lL02aZc2TNcDYUi3cYqCV743OWM2T6U6MEG4QoaAVsM4OmM6TKU9LoDxd1==/kisspng-gymnastics-handstand-balance-beam-split-sport-5af14e8a84a997.6121731015257637225434.png"
            alt=""
          />
        </div>
      </div>
    </div>

           </>
                
        )

    }
}
            
export default About;