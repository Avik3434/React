import React, { useContext } from 'react'
import UserContext from './../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return (<div>Please login</div>)
    console.log(user.userName)
    return (
        <div>Welcome <span id='username-profile'>{user.userName}</span></div>
    )
}


export default Profile