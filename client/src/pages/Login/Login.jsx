import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Login.scss";
import authAPI from './authAPI';


const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        identifier: "",
        password: ""
    })

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    // Envoyer la requete
    const handleSubmit = async(event) =>{
        event.preventDefault();
        
        let userAuthenticated = false;
        try{                                                 //essayer de faire la requete vers le service
            await authAPI.authenticate(credentials)         //retourner les credentials (id et mdp)
            userAuthenticated = true;
        } catch(error){                                    //En cas d'erreur la renvoyer
            console.log(error);
        }
        if (userAuthenticated) {
            navigate('/');
        }
    }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <div className='input'>
            <TextField 
                id="identifier"
                label="username"
                type='text'
                name='identifier'
                onChange={handleChange}
            />
        </div>
        <div className='input'>
            <TextField 
                id="password"
                label="password"
                type='password'
                name='password'
                onChange={handleChange}
            />
        </div>
        <div>
            <Button variant='contained' color='primary' type='submit'>
                Connexion
            </Button>
        </div>
        <div>
            <p>Pas encore de compte ? Créez vous en un ici !</p>
            <Button variant='contained' color='primary'>
                <Link className ="link" to="/register">Inscription</Link>
            </Button>
        </div>
    </form>
  );
}

export default Login