import React, { useState } from 'react';
import { axiosWithAuth } from '../Token';

const Login = (props) => {
    const [creds, setCreds] = useState({
        username:'',
        password:''
    });

    const handleChange = e => {
        e.preventDefault();
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="enter usename"
                value={creds.username}
                onChange={handleChange}
                /> <br/>
                <input
                type="password"
                name="password"
                placeholder="enter password"
                value={creds.password}
                onChange={handleChange}
                /><br/>
                <button>Sign In</button>
            </form>
        </div>
    )
}
export default Login;