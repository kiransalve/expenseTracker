import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/signup")
    }
    return (
        <div>
            <header>
                <div className="logo">
                    <h1>Expense Tracker</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><button className='logout' onClick={logout}>logout</button></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header