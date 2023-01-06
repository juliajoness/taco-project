import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import MenuContainer from "./Components/MenuContainer";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import SignupUpdate from "./Components/SignupUpdate";
import Profile from "./Components/Profile";

function App() {
  const [taco, setTaco] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [orders, setOrders] = useState([]);
  // console.log(loggedInUser);

  const updateUser = (user) => setUser(user);


  useEffect(() => {
    fetch("/orders")
      .then((r) => r.json())
      .then((orders) => setOrders(orders));
  }, []);

  useEffect(() => {
    fetch("/tacos")
      .then((r) => r.json())
      .then((taco) => setTaco(taco));
  }, []);

  useEffect( () => {
    if( !user ) {
      fetch("/users").then((r) => {
        if(r.ok) {
          r.json().then (setUser)
        }
      })
      }
  })

  // const [userArray, setUpdateSignup] = useEffect([])
  // useEffect(() => {
  //     fetch(`/users`)
  //         .then(response => response.json())
  //         .then(setUpdateSignup)
  // })

  // const handleSignupUpdate=(updateSignup)=>{
  //   const updateSignup = userArray.map((u) =>
  //       u.id === updateSignup.id? updateSignup : u
  //   )
  //   setNewUserSignup(updateSignup)
  // }
  const [userToLogin, updateUserLoginInfo] = useState(
    {
        username: '',
        password: ''
    }
)
console.log("State of userToLogin",userToLogin)

const handleLoginSubmit = (sythE)=>{
  sythE.preventDefault()
  
  fetch('/login',
  {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( userToLogin )
      
  }
  )
  .then((r) => r.json())
  .then(hopfullyAUser => {
      updateUser(hopfullyAUser) //
      // history.push(`/users/${username.id}`)
      setLoggedInUser(hopfullyAUser)
      
  })
  
}

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/tacos">
          <MenuContainer taco={taco} setTaco={setTaco} />
        </Route>

        
          <Route exact path="/users">
            <Login
              userToLogin={userToLogin}
              updateUserLoginInfo={updateUserLoginInfo}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              // handleSignupUpdate={handleSignupUpdate}
            />
          </Route>
        
          <Route exact path="/signupupdate" >
            {/* <SignupUpdate/> */}
          </Route>

        <Route exact path="/orders">
          <Order taco={taco} orders = {orders} />
        </Route>

        <Route exact path="/signup">
          <Signup setLoggedInUser={setLoggedInUser} />
        </Route>

        <Route exact path="/profile">
          <Profile userToLogin = {userToLogin} />  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
