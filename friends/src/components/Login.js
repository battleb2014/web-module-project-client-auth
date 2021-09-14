import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';

const initialState = {
    username: '',
    password: '',
    isLoading: false
}

const Login = () => {
    const [ credentials, setCredentials ] = useState( initialState );

    const handleChange = e => {
        setCredentials({ 
            ...credentials,
            [ e.target.name ]: e.target.value
         })
    }

    const login = e => {
        e.preventDefault();

        setCredentials({
            ...credentials,
            isLoading: true
        });

        setTimeout(() => {
            axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                setCredentials({
                    ...credentials,
                    isLoading: false
                })
                localStorage.setItem('token', res.data.payload);
                localStorage.setItem('role', res.data.role);
                localStorage.setItem('username', res.data.username);
                console.log(res);
            })
            .catch(err => console.error(err))
        }, 2000)
    }

    const animationClass = () => {
        if(credentials.isLoading) {
            return 'lds-hourglass'
        } else {
            return 'hidden'
        }
    }

    return (
        <div className = 'login'>
            <div className = { animationClass() }></div>
            <form className = 'form' onSubmit = { login }>
                <input
                    type = 'text'
                    name = 'username'
                    onChange = { handleChange }
                    value = { credentials.username }
                />
                <input
                    type = 'password'
                    name = 'password'
                    onChange = { handleChange }
                    value = { credentials.password }
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;