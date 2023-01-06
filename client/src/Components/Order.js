import React from "react";
import { useState } from "react";
import { Form, Input, Container } from "semantic-ui-react";

function Order({ taco }) {
  console.log(taco);

  const [name, setName] = useState('')
  const [tacoName, setTacoName] = useState('')


  const newOrders = {
      name: name,
      tacoName: tacoName,
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
      (setTacoName(data))
      })

  }
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <Form onSubmit={handleSubmit}>
              <label>Select Taco</label>
              <select multiple="" className="ui fluid search dropdown">
                {/* <option value="">Holy Guacamole</option>
                <option value="">Taco Tornado</option>
                <option value="">Burrito Bus</option>
                <option value="">Captain Jack Taco</option>
                <option value="">Wannabe Taco</option> */}
                {/* {taco.map(t =>
                  <option key={t.key} value={t.key}>{t.value}</option>
                )}; */}
                {taco.map(item => {
                    return (<option key={item.value} value={item.value}>{item.text}</option>);
                })}
              </select>
                <button type="submit">        
                <i className= "hand point right outline"></i>
                Sumbit
                </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Order;
