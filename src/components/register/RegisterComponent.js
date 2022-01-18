import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { accountService } from '../../services/account/accountService';
import ErrorBox from '../common/ErrorBox';
import { useNavigate } from 'react-router-dom';

import '../login/LoginComponent.scss';

import {Dropdown} from 'react-bootstrap'

const initialData = {
    username:"",
    full_name:"",
    email:"",
    password:"",
}

const RegisterComponent = () => {
    const state = useSelector(state => state);
    const access = state.account;

    let navigate = useNavigate();
    let accServ = accountService();

    const [data, setData] = useState(initialData);
    const [errorMessage, setErrorMessage] = useState(null);

    const [ loginUser ] = accServ.useLogin({setErrorMessage,data,setData});


    useEffect(() => {
        if(access.isLogged)navigate("../", { replace: true });
    }, [access, navigate])
    

    const handleLogin = (e) =>{
        e.preventDefault();
        setErrorMessage(null);
        if(!data.username || !data.password){
            alert("Datos incompletos");
            return;
        }
        
        loginUser({variables: {
            username: data.username,
            password: data.password
        }});
    };

    
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name='username' placeholder='Usuario' onChange={handleChange} value={data.username} /> 
                <br/>
                <input type="password" name='password' placeholder='Contraseña' onChange={handleChange} value={data.password} /> 
                <br/>
                <input type="submit" placeholder='Ingresar'/> 
            </form>


            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            
            {errorMessage && <ErrorBox errorMessage={errorMessage}/>}

        </div>
    )
}

export default RegisterComponent