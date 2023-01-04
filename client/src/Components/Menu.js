import React from 'react'

function Menu({tacoObj}) {
    // console.log(tacoObj)
    return (
    <div className="ui four column doubling stackable grid container">
    <div className="column">
        <img src = {tacoObj.image} alt = {tacoObj.taco_name}   /> 
        <h2> {tacoObj.taco_name} </h2>
        <p> {tacoObj.ingredients}</p>
        <h3> ${tacoObj.price}</h3>
    </div>

    </div>
    )
}

export default Menu;