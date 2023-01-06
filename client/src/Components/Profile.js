import { useReducer } from "react"


function Profile ({userToLogin}){
    return (
        <div>
            <h2>{userToLogin.email}</h2>
            <p>PROFILE</p>
        </div>
    )
}

export default Profile
