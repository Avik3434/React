import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser({userName, password, email})
    }
    return (
        <div id='form'>
            <h2 id='log-in'>Log in</h2>

            <input
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
                type="text"
                placeholder='username' 
                id='username'/>

            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type="password"
                placeholder='password' 
                id='password'/>

            <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="email"
                placeholder='email' 
                id='email'
                />

            <button id='submit' onClick={handleSubmit}>Log In</button>
        </div>
    )
}

export default Login
