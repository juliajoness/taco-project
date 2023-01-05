import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Signup from './Signup'
import { useHistory } from 'react-router-dom'

function Login({updateUser, loggedInUser, setLoggedInUser}) {
    // const [ loggedInUser, setLoggedInUser ] = useState(null)
    // const [user, setUser] = useState([])

    console.log(loggedInUser)
    useEffect(
        () =>{
            fetch("/userInSession")
            .then(response => response.json())
            .then(userLoggedIn => {
                setLoggedInUser(userLoggedIn)
            })
        },[])


const [userToLogin, updateUserLoginInfo] = useState(
    {
        username: '',
        password: ''
    }
)
console.log("State of userToLogin",userToLogin)


const handleOnChangeUserToLogin =(sythE)=>{
    // console.log(sythE)
    updateUserLoginInfo({ ...userToLogin ,[sythE.target.name]: sythE.target.value })
}

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
    const handleLogOut = ({setLoggedInUser}) => {
    
        fetch('/logout', {method: 'DELETE'})
        .then(r => r.json())
        .then( deleteResponse =>{
            
            setLoggedInUser(null)
        })

    }

    return (
    <div className ="page-login">
    <div className ="ui centered grid container">
    <div className ="ten wide column">
    <div className ="ui fluid card">
    <div className ="content">
        {
            loggedInUser ? 
            
            (<>
            <h2> Welcome {loggedInUser.username }!!! </h2>
            </>)
            
            :
            <div className ="ui icon warning message">
                <i className ="lock icon"></i>
                <div className ="content">
                <div className ="header">
                    Login failed!
                </div>
                <p>You might have misspelled your username or password!</p>
                </div>
            </div>

        }
    <form onSubmit={handleLoginSubmit} className ="ui form" method="POST" >
        <div className ="field">
        <label>User</label>
        <input onChange={handleOnChangeUserToLogin} type="text" name="username" placeholder="User"/>
        </div>
        <div className ="field">
        <label>Password</label>
        <input onChange={handleOnChangeUserToLogin} type="password" name="password" placeholder="Password"/>
        </div>
        <button className ="ui primary labeled icon button" type="submit">
        <i className ="unlock alternate icon"></i>
        Login
        </button>
        <button onClick={handleLogOut} className ="ui primary labeled icon button" type="submit">
        <i className ="unlock alternate icon"></i>
        Logout
        </button>
        <NavLink className="button" role="button" exact to="/signup">
        <button className ="ui primary labeled icon button" type="submit">        
        <i className= "hand point right outline"></i>
        Signup
        </button>
    
        </NavLink>
    </form>
    </div>
    
    </div>
</div>

</div>
</div>

    )
}

export default Login;








