import React, { useState, useEffect } from 'react'
import FriendsForm from './FriendsForm'
import Friend from './Friend'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [ friends, setFriends ] = useState([])

    const getData = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)
        })
        .catch((err) => console.log(err.message));
    }

    useEffect(() => {
        getData()
    }, []);
    
    return (
        <div>
            <h1>My Friends</h1>
            <FriendsForm />
            <div>
                {
                    friends.map(friend => (
                        <div>
                            <Friend name={friend.name} age={friend.age} email={friend.email} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FriendsList