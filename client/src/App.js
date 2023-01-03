import './App.css';
import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Menu from './Components/Menu';
import MenuContainer from './Components/MenuContainer';
import Home from './Components/Home';

function App() {
const [taco, setTaco] = useState([])
const [user, setUser] = useState([])
console.log(user)

useEffect(() => {
  fetch('/tacos')
  .then((r) => r.json())
  .then(taco => setTaco(taco));
}, [])

useEffect(() => {
  fetch('/users')
  .then((r) => r.json())
  .then(user => setUser(user));
}, [])


  return (
    <div>
      <MenuContainer
          taco={taco}
          user={user}
          setTaco={setTaco}
          
          
        />  
    {/* <Switch>
      <Route exact path="/">
        <Home/>  
      </Route>

      <Route exact path="/tacos">
        <MenuContainer
          taco={taco}
          user={user}
          setTaco={setTaco}
          
          
        />  
      </Route>
        


      
    </Switch> */}
    </div>
  );
}

export default App;
