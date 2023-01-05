import { Form, Input, Container, Checkbox, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory } from'react-router-dom'

function Signup({setLoggedInUser}){
    const [newUser, setNewUser] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
 
    const history = useHistory()

    const newUserSignup = {
        username: newUser,
        email: newEmail,
        password: newPassword
    }
 console.log(newUserSignup)

    function handleSubmit (e){
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUserSignup)
            })
            .then((r) => r.json())
            .then((newSignup) => {
                setLoggedInUser(newSignup)
            history.push("/users")
            })
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Username'
            onChange={(e) => setNewUser(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Last Name'
            onChange={(e) => setNewEmail(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I like tacos!!!' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>

        </div>
    )
}

export default Signup