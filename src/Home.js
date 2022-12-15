import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,Navlink,Switch} from 'react-router-dom';
import style from "./style.css"
import About from './About';
import login from './login';
import myprofile from './myprofile';
import table from './table';

class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
      
               <>
                {/* <!-- Menu --> */}
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
            <li class="nav-item"><Link to="/myprofile">MyProfile</Link></li>
            <li class="nav-item"><Link to="/table">Table</Link></li>
          
        </ul>

        <li class="nav-item"><a href="#" class="btn"><Link to="/login">Login</Link></a></li>
      </div>
    </div>
    {/* <!-- End Menu --> */}

    {/* <!-- Header --> */}
    <header class="header">
      <div class="container flex">
        <div class="text">
          <h1 class="mb">
            Complete Daily <br />
            <span>Workout</span> At Home
          </h1>

          <p class="mb">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            sunt sed tempora neque molestiae corrupti nobis harum ullam eos nam!
          </p>

          <a href="#" class="btn mt">Get Started Now</a>
        </div>

        <div class="visual">
          <img
            src="https://freepngimg.com/thumb/gym_equipments/49547-5-barbell-download-free-image.png"
            alt=""
          />
        </div>
      </div>
    </header>
    
    {/* <!-- End Why Us --> */}

    {/* <!-- Explore --> */}
    <div class="section" id="explore">
      <div class="container flex">
        <div class="visual">
          <img
            src="https://freepngimg.com/thumb/gym_equipments/52356-8-exercise-download-hd-image-free-png.png"
            alt=""
          />
        </div>
        <div class="text">
          <h2 class="primary mb">
            Explore Our Fitness <br />
            Studio
          </h2>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            esse vitae ratione quos maiores eveniet temporibus illum! Eligendi
            amet officia unde sint totam ut optio. Molestiae, illo quia?
          </p>

          <a href="#" class="btn mt">Get Started Now</a>
        </div>
      </div>
    </div>
    {/* <!-- End Explore -->

    <!-- Trainer --> */}
    <div class="section" id="trainer">
      <h2 class="primary mb">Our Professional Trainers</h2>
      <div class="container flex">
        <div class="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
            alt=""
          />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" class="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div class="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
            alt=""
          />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" class="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div class="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
            alt=""
          />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" class="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
    {/* <!-- End Trainer -->

    

    <!-- Discount --> */}
    <div class="section" id="discount">
      <div class="container flex">
        <div class="visual">
          <img
            src="https://freepngimg.com/thumb/gym_equipments/52353-3-exercise-free-clipart-hd.png"
            alt=""
          />
        </div>
        <div class="text">
          <h2 class="primary mb">
            Fitness Classes This Summer, Pay Now And Get 25% Discount
          </h2>

          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
            minus praesentium est et veniam voluptate alias excepturi minima
            placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum,
            explicabo eaque obcaecati.
          </p>

          <a href="#" class="btn bt">Book Now</a>
        </div>
      </div>
    </div>
    {/* <!-- End Discount -->

    <!-- Footer --> */}
    <footer class="footer">
      <div class="container flex">
        <p class="tertiary">
          &copy; 2022 Programmer Cloud. All Rights Reserved.
        </p>
      </div>
    </footer>
    
               </>
               
                
        )

    }
}
            
export default Home;