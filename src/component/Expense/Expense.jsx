import React from 'react'
import "./Expense.css"
import { Link } from 'react-router-dom'

const Expense = () => {
  return (
    <div className="expense">
      <h1>Welcome to Expense Tracker App!</h1>
      <p className='expense-subtitle'>Here you can track your expenses.</p>
      <div className="message-container">
        <div className="message">Your profile is incomplete,
          <Link className="userProfile-link" to="/userProfile"> Complete Profile</Link>
        </div>
      </div >
    </div >
  )
}

export default Expense