import React from 'react'
import { useState } from 'react'
import { Form, Input, Container } from 'semantic-ui-react'


function Order() {
    // const [name, setName] = useState('')
    // const [tacoName, setTacoName] = useState('')
    // const [ingredients, setIngredients] = useState('')
    
 

    // const newOrders = {
    //     name: name,
    //     tacoName: tacoName,
    //     ingredients: ingredients
    //     }
    // function handleSubmit (e){
    //     e.preventDefault()
    //     fetch("/orders", {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(newOrders)
    //         })
    //         .then((r) => r.json())
    //         .then((data) => {
    //         (console.log(data))
    //         })

    // } 
    return (
        <div>
        <Container>
        <Form>
            <Form.Field required>
            <label>Last name</label>
            <Input placeholder='Full name' />
            </Form.Field>
        </Form>
        <h2> im here</h2>
        </Container>
        <h1>hi</h1>
        </div>
    )
}

export default Order;