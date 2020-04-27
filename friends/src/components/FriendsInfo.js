import React, { useState } from 'react';
import { axiosWithAuth } from '..//Token';

const FriendsInfo = () => {
    const [friendInfo, setFriendInfo] = useState ({
        name: '',
        age: '',
        email: '',
    })
    const handleChange = e => {
        e.preventDefault();
        setFriendInfo({
            ...friendInfo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', friendInfo)
        .then(res => {
            console.log(res);
            setFriendInfo({name:'', age:'', email:''})
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
                required
                type='text'
                id='name'
                name='name'
                placeholder='Name That Friend - AKA Yourself!'
                onChange={handleChange}
                value={friendInfo.name}
            /> 
            <input
                required
                type='text'
                id='age'
                name='age'
                placeholder='Please Tell Us Your Age'
                onChange={handleChange}
                value={friendInfo.name}
            />
            <input
                required
                type='text'
                id='email'
                name='email'
                placeholder='What is your best email address?'
                onChange={handleChange}
                value={friendInfo.name}
            />
        </form>
    )
};
export default FriendsInfo;