import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import MenuContainer from './Components/MenuContainer';
import Login from './Components/Login';
import Order from './Components/Order';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
const [taco, setTaco] = useState([])
const [user, setUser] = useState(null)
const [ loggedInUser, setLoggedInUser ] = useState(null)

const updateUser = (user) => setUser(user)

useEffect(() => {
  fetch('/tacos')
  .then((r) => r.json())
  .then(taco => setTaco(taco));
}, [])


  return (
    <div>
      <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>  
      </Route>

      <Route exact path="/tacos">
        <MenuContainer
          taco={taco}
          setTaco={setTaco}
          />  
      </Route>

      <Route exact path="/users" >
        <Login 
        updateUser= {updateUser}
        loggedInUser= {loggedInUser}
        setLoggedInUser= {setLoggedInUser}/>
      </Route>

      <Route exact path="/orders">
        <Order />
      </Route>
        
      <Route exact path="/signup">
        <Signup setLoggedInUser= {setLoggedInUser}/>
      </Route>
        


      
    </Switch>
    </div>
  );
}

export default App;
