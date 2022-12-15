import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,Navlink,Switch} from 'react-router-dom';
import Home from './Home';
import style from "./style.css"
import About from './About';
import myprofile from './myprofile';
import table from './table';

class login extends React.Component{
    constructor(props){
		super(props)
        let loggedIn=false;
		this.state={
			username:'',
			password:'',
			loggedIn
			
		}
        this.onChange=this.onChange.bind(this)
		this.Submitform=this.Submitform.bind(this)
    }
	 onChange(e){
		 this.setState({
			[e.target.name]:e.target.value
		 })
	 }
	  Submitform(e){
		  e.preventDefault()
		  const {username,password}=this.state	
		  if(username==="Jash1903" && password==="1903"){
			this.setState({
				loggedIn:true
			})
		  }
	  }
    render(){
		  if(this.state.loggedIn){
			return <Redirect to="/"/>
		  }
		 
        return(
            <>
            <div class="bgd">
         <div class="container">
	<h1 class="text-center py-5">DXC Login</h1>
	<form class="action" method="get" onSubmit={this.Submitform}>
		<div class="form-group">
			<label for="exampleInputEmail1">UserName</label>
			<input type="text" class="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" value={this.state.username} onChange={this.onChange} required={true}/>
		</div><br/><br/>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.onChange} required={true}/>
		</div><br/>
		<button type="submit" class="float-right btn btn-dark" >Submit</button>
	</form>
</div>
</div>
            </>
        )
    }
}
    
export default login;