import React from 'react'
import RegisterComponent from '../../components/register/RegisterComponent'

import "./Register.scss";

const Register = () => {
    return (
        <div className="custom-container contRegister">
            <div className="row row_box">
                <div className="col-6 register-form">
                    <RegisterComponent/>   
                </div>
                <div className="col-6 g-0">
                    <div className="register-image">
                        <div className="register-text">
                            <h3>Te damos la bienvenida a </h3>
                            <h1>CyberPlace</h1>
                            <h5 className="mt-5">Una tienda virtual de tecnología hecha para ti.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
