import React from 'react'
import RegisterComponent from '../../components/register/RegisterComponent'

const Register = () => {
    return (
        <div className="bg-danger custom-container mt-5 contLogin">
            <div className="row row_box ">
                <div className="col-6">
                    <div className="vertical-cont">
                        <div className="vertical-center">
                            <RegisterComponent/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-6 bg-dark">
                    <p className='bg-light'>Bienvenido a CyberPlace</p>
                </div>
            </div>
        </div>
    )
}

export default Register
