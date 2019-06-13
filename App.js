import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './action.js';
import store from './store.js';
import { BrowserRouter, Route } from 'react-router-dom';
//import Navigation from './components/navagation.js';
import Router1 from './components/router.js';
import Register from './components/register.js';
import Login from './components/login.js';
//import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
 
   render() {
      return (
     
         <div id="app">
		   <Counter store={store}/>
         {/* <Route path='/' component={Counter} store={store}/>
        <Route path='/login' component={Login} store={store}/>
        <Route path="/register" component={Register} store={store}/> */}
        {/* <Route exact path="/register" component={Register} /> */}
                 {/* <Router1 store={store}/>
                 <Counter store={store}/>
                 <div class="col-sm-12">
                    <Rgister store={store}/>
                    <Login store={store}/>
                 </div>  */}
         </div>
      );
   }
}

//export default App; 
ReactDOM.render((<BrowserRouter>
   <App />
 </BrowserRouter>), document.getElementById('app'));