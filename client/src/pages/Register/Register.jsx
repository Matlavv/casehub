import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./Register.scss";


const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister() {
        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        const register = await fetch(`http://localhost:1337/api/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
        
        navigate('/login');
        

        const registerResponse = await register.json();
    }


  return (
    <form className='form'>
        <div className="input"><TextField type='text' onChange={e => setUsername(e.target.value) } value={username} label="username" className='field'/></div>
        <div className="input"><TextField type='email' onChange={e => setEmail(e.target.value) } value={email} label='email' className='field'/></div>
        <div className="input"><TextField type='password' onChange={e => setPassword(e.target.value) } value={password} label='password' className='field'/></div>
        <div>
            <Button variant='contained' color='primary' onClick={() => handleRegister() }>
                Inscription
            </Button>
        </div>
    </form>
  )
}

export default Register