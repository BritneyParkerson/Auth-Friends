import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Token';
import Friends from './Friends';
import FriendRequest from './FriendRequest';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data)
        })

    }, [])
    return(
        <div>
        <FriendRequest/>
        <Friends key={friends.id} friends={friends}/>
        </div>
    )
}
export default FriendsList;