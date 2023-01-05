import { Form, Input, Container, Checkbox, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory } from'react-router-dom'

function Signup({setLoggedInUser, handleSignupUpdate}){
    const [newUserSignup, setNewUserSignup] = useState(
        {
            username: '',
            email: '',
            password: '',}
    )
    console.log(newUserSignup)

    const [errors, setErrors] = useState([])
    const history = useHistory()
    
    const {username, email, password} = newUserSignup

    function handleSignupSubmit (e){
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }
        fetch("/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }
    const handleOnChangeSignup =(sythE)=>{
        setNewUserSignup({ ...newUserSignup ,[sythE.target.name]: sythE.target.value })

        console.log(sythE)
    }



    const [newUserName, setNewUserName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const updatedSignup ={
        newUserName,
        newEmail,
        newPassword
    }
    // function handleUpdateSubmit(e){
    //     e.preventDefault()
    //     fetch(`/users/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //     },
    //         body: JSON.stringify(updatedSignup)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    // })
//  }
    return(
        <div>
        <Form onSubmit={handleSignupSubmit}>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Username' name="username"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' name="email"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type="password" name="password"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I like tacos!!!' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        {/* <Login/> */}
        </Form>

        </div>
    )
}

export default Signup
// const [newEmail, setNewEmail] = useState('')
// const [newPassword, setNewPassword] = useState('')

// const history = useHistory()

// const newUserSignup = {
//     username: newUser,
//     email: newEmail,
//     password: newPassword
// }