import React from 'react'
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div className="profile-container">
            <div class="profile">
                <h2>Complete Your Profile</h2>
                <label>User Name:</label>
                <input type="text" name="username" />
                <label>Profile Photo URL:</label>
                <input type="text" name="profile-photo-url" />
                <button>Update</button>
            </div>
        </div>
    )
}

export default UserProfile