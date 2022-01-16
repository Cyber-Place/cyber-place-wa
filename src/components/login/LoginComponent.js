import React, {useState} from 'react'
//import { helpRequest } from '../../helpers/helpRequest';

import { accountService } from '../../services/account/accountService';

const initialData = {
    username : "",
    password : ""
}

const LoginComponent = () => {
    let accServ = accountService();

    const [data, setData] = useState(initialData);
    //const [user, setUser] = useState(null);
    const [ loginUser ] = accServ.useLogin();
    
    
    
    

    /*useEffect(() => {
        if(result.data){
            setUser(result.data.login)
            
        }
    }, [result])

    useEffect(() => {
        console.log(user);
    }, [user])*/

    const handleLogin = (e) =>{
        e.preventDefault();
        if(!data.username || !data.password){
            alert("Datos incompletos");
            return;
        }
        
        loginUser({variables: {
            username: data.username,
            password: data.password
        }}).then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        });
        
        /*
        createUser({variables: {
            username: data.username,
            password: data.password
        }}).then(
            res => {

            }
        ).catch(err => {
            console.log(err)
        });*/
        
    };
    
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    return (
        <div style={{background:"#dddfff", padding:50}}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name='username' placeholder='Usuario' onChange={handleChange} /> 
                <input type="text" name='password' placeholder='Contraseña' onChange={handleChange} /> 
                <input type="submit" placeholder='Ingresar'/> 
            </form>
        </div>
    )
}

export default LoginComponent
