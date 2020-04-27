import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '..//Token';
import Friends from './Friends';
import FriendsInfo from './FriendsInfo';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data)
        })
    }, [])
    return(
        <div>
        <FriendsInfo/>
        <Friends key={friends.id} friends={friends}/>
        </div>
    )
}
export default FriendsList;