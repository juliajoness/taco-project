import React, { useState, useEffect } from 'react'
import {Form, Button} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function Profile ({user, changeProfileState, updateUser}){
    
    console.log(user)
    const [username, setUsername] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    // const routeChange = () =>{ 
    //     let path = '/login'; 
    //     history.push(path);
    // }

    const onUpdate = (e) => {
        e.preventDefault()

        setUsername("")
        setEmail("")
        setPassword("")
       

        const newProfileInfo = {
            username: username,
            email: email,
            password: password
        }

        fetch(`/users/${user.id}`, {
            method:"PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProfileInfo)
        })
        .then(res => res.json())
        .then((review) => {
            changeProfileState(review)
        })
        // routeChange()
    }

    const history = useHistory() 

    const handleLogOut = () => {
    
        fetch('/logout', {method: 'DELETE'})
        .then(r => {
                console.log('log out')
                updateUser(null)
                history.push('/')
        })
    }
    const onDelete = (currentUserId) => {
        fetch(`/users/${currentUserId}`, {
            method:"DELETE",
            headers: {"Content-Type": "application/json"}
        })
        handleLogOut()
        
        console.log(currentUserId)

    }


    return (
        <div>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <Form >
                <Form.Field required>
                    <label>Username</label>
                    <input placeholder="Username"value={onUpdate.username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input value={onUpdate.email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input type= "password "value={onUpdate.password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                
                <Button onClick={onUpdate}>Update information</Button>
                <Button onClick={(e) => onDelete(user.id)}>Delete Account</Button>
            </Form>
        </div>
    )
}

export default Profile
