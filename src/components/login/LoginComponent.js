import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { accountService } from '../../services/account/accountService';
import ErrorBox from '../common/ErrorBox';
import { useNavigate } from 'react-router-dom';

import '../login/LoginComponent.scss';

import { Link } from 'react-router-dom';

const initialData = {
    username : "",
    password : ""
}

const LoginComponent = () => {
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
            setErrorMessage("Datos incompletos");
            return;
        }
        
        loginUser({variables: {
            username: data.username,
            password: data.password
        }})
    };

    
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    return (
        <div className='container-login'>
            <h3>Iniciar sesión</h3>
            <div className = "not-register">
                <span> ¿No estás registrado? </span>
                <Link to ="/register" className='register'> Registrate </Link>
            </div>
            <form className="mt-3 form-login" onSubmit={handleLogin}>
                <div className="f_placeholder">Usuario</div>
                <input type="text" name='username' placeholder='' onChange={handleChange} value={data.username} /> 
                <div className="f_placeholder">Contraseña</div>
                <input type="password" name='password' placeholder='' onChange={handleChange} value={data.password} />
                <div className="f_placeholder"></div>
                {errorMessage && <ErrorBox errorMessage={errorMessage}/>}
                <button type="submit">Ingresar</button>
            </form>
            
            

        </div>
    )
}

export default LoginComponent
