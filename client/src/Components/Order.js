import React from "react";
import { useState } from "react";
import { Form, Input, Container, Button } from "semantic-ui-react";

function Order({ taco, user }) {
  console.log(taco);

  const [time, setTime] = useState('')
  const [taco_id, setTaco_id_] = useState('')

  const newOrder = {
    time: time,
    user_id: user.id,
    taco_id: taco.id
  }
  function handleSubmit (e){
    e.preventDefault()
    fetch("/orders", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newOrder)
    })
    .then((r) => r.json())
    .then((data) => {
      (console.log(data))
    })

  }

  const handleDropDownChange = (e) => {
    console.log(e.target.value)

  }

  const handleTimeChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="ui form">
        <div className="field">
        <label>Time</label>
          <input onChange={handleTimeChange} type="number"/>
              <label>Select Taco</label>
              <select onChange={handleDropDownChange} multiple="" className="ui fluid search dropdown">
                <option value="6">Holy Guacamole</option>
                <option value="7">Taco Tornado</option>
                <option value="8">Burrito Bus</option>
                <option value="9">Captain Jack Taco</option>
                <option value="10">Wannabe Taco</option>
              </select>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default Order;

//   const [orderTime, updateOrderTime] = useState(
//     {
//         time: '',
//     }
// )



// const handleOnChangeOrderTime =(sythE)=>{
//     // console.log(sythE)
//     updateOrderTime({ ...orderTime ,[sythE.target.name]: sythE.target.value })
// }