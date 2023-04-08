import React, { useEffect, useState } from 'react'
import "./UserProfile.css"

const UserProfile = () => {
    const [name, setName] = useState("")
    const [photourl, setPhotourl] = useState("")

    const idtoken = localStorage.getItem('user')
    const handleUserProfile = async () => {
        console.log(idtoken, name, photourl);

        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDMydJmt7CfP_0gOdtkgIyYRBQlEOMIutw",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idToken: `${idtoken}`,
                        displayName: name,
                        photoUrl: photourl,
                        returnSecureToken: true,
                    })
                })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDMydJmt7CfP_0gOdtkgIyYRBQlEOMIutw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idToken: `${idtoken}`
                })
            })
            const data = await response.json()
            setData(data.users[0]);
            console.log(data)
        }
        fetchData()
    }, [idtoken])

    useEffect(() => {
        if (data) {
            setName(data.displayName);
            setPhotourl(data.photoUrl);
        }
    }, [data]);
    return (
        <div className="profile-container">
            <div className="profile">
                <h2>Your Profile</h2>
                <label>User Name:</label>
                <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Profile Photo URL:</label>
                <input type="text" name="profile-photo-url" value={photourl} onChange={(e) => setPhotourl(e.target.value)} required />
                <button onClick={handleUserProfile}>Update</button>
            </div>
        </div>
    )
}

export default UserProfile