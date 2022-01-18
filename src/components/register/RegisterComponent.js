import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { accountService } from '../../services/account/accountService';
import ErrorBox from '../common/ErrorBox';
import SuccessBox from '../common/SuccessBox';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../register/RegisterComponent.scss';




const initialData = {
    username:"",
    full_name:"",
    email:"",
    password:"",
    r_password:"",
}

const RegisterComponent = () => {
    const state = useSelector(state => state);
    const access = state.account;

    let navigate = useNavigate();
    let accServ = accountService();

    const [data, setData] = useState(initialData);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const [ registerUser ] = accServ.useRegister({setErrorMessage,setSuccessMessage,setData});


    useEffect(() => {
        if(access.isLogged)navigate("../", { replace: true });
    }, [access, navigate])
    

    const handleRegister = (e) =>{
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);
        if(!data.username || !data.full_name || !data.email || !data.password || !data.r_password){
            setErrorMessage("Datos incompletos");
            console.log("Datos incompletos")
            return;
        }
        if(data.password !== data.r_password){
            setErrorMessage("Las contraseñas no concuerdan");
            console.log("Las contraseñas no concuerdan");
            return;
        }
        registerUser({variables: {
            username: data.username,
            full_name: data.full_name,
            email: data.email,
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
        <div className='container-register'>
            <h3>Registrarse</h3>
            <div className = "not-login">
                <span> ¿Ya estás registrado? </span>
                <Link to ="/login" className='login'> Inicia sesión </Link>
            </div>
            <form className="mt-3 form-register" onSubmit={handleRegister}>

                <div className="f_placeholder">Selecciona un nombre de usuario</div>
                <input type="text" name='username' placeholder='' onChange={handleChange} value={data.username} /> 

                <div className="f_placeholder">Ingresa tu nombre</div>
                <input type="text" name='full_name' placeholder='' onChange={handleChange} value={data.full_name} /> 

                <div className="f_placeholder">Ingresa tu correo electrónico</div>
                <input type="email" name='email' placeholder='' onChange={handleChange} value={data.email} />
                
                <div className="f_placeholder">Elige una contraseña</div>
                <input type="password" name='password' placeholder='' onChange={handleChange} value={data.password} />

                <div className="f_placeholder">Verifica tu contraseña</div>
                <input type="password" name='r_password' placeholder='' onChange={handleChange} value={data.r_password}/>

                <div className="f_placeholder"></div>
                {errorMessage && <ErrorBox errorMessage={errorMessage}/>}
                {successMessage && <SuccessBox successMessage={successMessage}/>}
                <button type="submit">Registrar</button>

            </form>
        </div>
    )
}

export default RegisterComponent