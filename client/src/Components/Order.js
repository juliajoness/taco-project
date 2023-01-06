import React from "react";
import { useState } from "react";
import { Form, Input, Container } from "semantic-ui-react";

function Order({ taco }) {
  console.log(taco);

  const [name, setName] = useState('')
  const [tacoName, setTacoName] = useState('')
  const [ingredients, setIngredients] = useState('')

  const newOrders = {
      name: name,
      tacoName: tacoName,
      ingredients: ingredients
      }
  function handleSubmit (e){
      e.preventDefault()
      fetch("/orders", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newOrders)
          })
          .then((r) => r.json())
          .then((data) => {
          (console.log(data))
          })

  }
  return (
    <div>
      <div className="ui form">
        <div className="field">
              <label>Select Taco</label>
              <select multiple="" className="ui fluid search dropdown">
                <option value="">Holy Guacamole</option>
                <option value="">Taco Tornado</option>
                <option value="">Burrito Bus</option>
                <option value="">Captain Jack Taco</option>
                <option value="">Wannabe Taco</option>
              </select>
        </div>
      </div>
    </div>
  );
}

export default Order;
