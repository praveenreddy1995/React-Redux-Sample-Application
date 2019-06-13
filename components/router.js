import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../components/login.js';
import { RegisterPage } from '../components/register.js';
import { Homepage } from '../action.js';
import store from '../store.js';

class Router1 extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
            <div>
               <img src="logo1.png"/>	
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
                  <li><Link to={'/register'}>Register</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/Login' component={LoginPage} />
                  <Route exact path='/register' component={RegisterPage} />
                  
               </Switch>
              
            </div>
         </Router>

        );
    }
}

function mapStateToProps(state)
{
	console.log("mapStateToProps",state);
	return{
	count:state.count,
    a:state.a, 
    username:state.username,
    password:state.password,
	mess: state.mess,
	isOpen:state.isOpen
	
}

}

export default connect(mapStateToProps)(Router1);