import React from "react";
import Menu from "./Menu";



function MenuContainer ({taco}){
    const arrayoftacos = taco.map(tacoObj => {
        return <Menu tacoObj = {tacoObj} key = {tacoObj.id}/>})
    return (
        <div>
            {arrayoftacos}
        
        </div>
    )
}

export default MenuContainer;