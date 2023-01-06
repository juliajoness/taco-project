import React from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, Segment} from 'semantic-ui-react'
function Navbar() {
    

    return (

        <Segment >
        <Menu pointing secondary>
        
        <Menu.Item>
        <NavLink className="button" role="button" exact to="/users">
        Home
        </NavLink>
        </Menu.Item>

        <Menu.Item>
        <NavLink className="button" role="button" exact to="/tacos">
        Menu
        </NavLink>
        </Menu.Item>

        <Menu.Item>
        <NavLink className="button" role="button" exact to="/orders">
        Place Order
        </NavLink>
        </Menu.Item>

        <Menu.Item>
        <NavLink className="button" role="button" exact to="/profile">
        Profile
        </NavLink>
        </Menu.Item>


        </Menu>
        </Segment>
        
       

        
    )
}

export default Navbar;