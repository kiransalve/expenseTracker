import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
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

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header