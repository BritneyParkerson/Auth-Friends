import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import Redirecting from './components/PrivateRoute';
import './App.css';

function App() {
  const SignOut = () => {
    localStorage.clear()
  } 
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
         <br/>  
           <Redirecting exact path="/friends" component={FriendsList}/>
           <Route component={Login}/>
        <Link className="Links" to="/" onClick={SignOut}>
           Sign Out
           </Link>
     </Router>
    </div>
  );
}

export default App;
