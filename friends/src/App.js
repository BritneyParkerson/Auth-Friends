import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import Redirecting from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router className="Router">
       <Link className="Links" to='/Login'>
        Sign In
       </Link>
       <br/>
       <Link className="Links" to='/friends'>
         Friends List
         </Link>
         <Switch>
           <Redirecting exact path="/friends" component={FriendsList}/>
           <Route component={Login}/>
         </Switch>
     </Router>
    </div>
  );
}

export default App;
