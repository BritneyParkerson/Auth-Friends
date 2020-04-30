import React, { useState } from 'react';
import { axiosWithAuth } from '../Token';

const FriendRequest = () => {
    const [confirmAdd, setConfirmAdd] = useState ({
        name: '',
        age: '',
        email: '',
    })
    const handleChange = e => {
        e.preventDefault();
        setConfirmAdd({
            ...confirmAdd,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', confirmAdd)
        .then(res => {
            console.log(res);
            setConfirmAdd({name:'', age: '', email:''})
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
                required
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                onChange={handleChange}
                value={confirmAdd.name}
            /> 
            <input
                required
                type='text'
                id='age'
                name='age'
                placeholder='Your Age'
                onChange={handleChange}
                value={confirmAdd.age}
            />
            <input
                required
                type='text'
                id='email'
                name='email'
                placeholder='Best email address'
                onChange={handleChange}
                value={confirmAdd.email}
            />
            <button type="submit">Add Friend</button>
        </form>
    )
};
export default FriendRequest;
