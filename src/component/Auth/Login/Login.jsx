import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            navigate("/expense")
        }
    }, [navigate])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMydJmt7CfP_0gOdtkgIyYRBQlEOMIutw",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
            const data = await response.json();
            console.log(data);
            if (data.idToken) {
                localStorage.setItem("user", JSON.stringify(data))
                navigate("/expense")
            }
        } catch (error) {

        }

    }
    return (
        <div className='login'>
            <form onSubmit={handleFormSubmit} className='loginForm'>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} required
                />

                <input type='submit' value='Login' />
            </form>
        </div>

    )
}

export default Login