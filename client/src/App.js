import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Menu from './Components/Menu';
import Home from './Components/Home';
import MenuContainer from './Components/MenuContainer';
import Login from './Components/Login';
import Order from './Components/Order';


function App() {
const [taco, setTaco] = useState([])
const [user, setUser] = useState([])

useEffect(() => {
  fetch('/tacos')
  .then((r) => r.json())
  .then(taco => setTaco(taco));
}, [])


  return (
    <div>
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
        <Login />
      </Route>

      <Route exact path="orders">
        <Order />
      </Route>
        
        


      
    </Switch>
    </div>
  );
}

export default App;
