import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsForm = ({setNewFriendsList}) => {
    const [ newFriend, setNewFriend ] = useState({
        name:'',
        age:'',
        email:'',
        id: Date.now()
    })

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => setNewFriendsList(res.data));
        setNewFriend({
            name:'',
            age:'',
            email:''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        value={newFriend.name}    
                        onChange={handleChange}
                    />
                <label>Age</label>
                    <input
                        name="age"
                        type="text"  
                        value={newFriend.age}  
                        onChange={handleChange}
                    />
                <label>Email</label>
                    <input
                        name="email"
                        type="text"   
                        value={newFriend.email} 
                        onChange={handleChange}
                    />
                <button>Friend I Am</button>
            </form>
        </div>
    )
}

export default FriendsForm