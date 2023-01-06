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
  const [user, setUser] = useState(false);
  //const [loggedInUser, setLoggedInUser] = useState(null);
  //console.log(loggedInUser);

  const updateUser = (user) => setUser(user);
  console.log(user)

  console.log("user", user);

  useEffect(() => {
    fetch("/tacos")
      .then((r) => r.json())
      .then((taco) => setTaco(taco));
  }, []);

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

  function changeProfileState(changedProfileObj) {
    const changedUserArray = [...user];
    const index = changedUserArray.findIndex(
      (p) => p.id === changedProfileObj.profile_id
    );
    const newUserArray = changedUserArray[index].user.map((r) =>
      r.id === changedProfileObj.id ? changedProfileObj : r
    );
    changedUserArray[index].user = newUserArray;
    setUser(changedUserArray);
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
            user={user}
            updateUser={updateUser}
            //loggedInUser={loggedInUser}
            //setLoggedInUser={setUser}
            // handleSignupUpdate={handleSignupUpdate}
          />
        </Route>

        <Route exact path="/signupupdate">
          {/* <SignupUpdate/> */}
        </Route>

        <Route exact path="/orders">
          <Order taco={taco} user={user} />
        </Route>

        <Route exact path="/signup">
          <Signup setLoggedInUser={setUser} />
        </Route>

        <Route exact path="/profile">
          <Profile
            user={user}
            setUser={setUser}
            changeProfileState={changeProfileState}
            updateUser={updateUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
