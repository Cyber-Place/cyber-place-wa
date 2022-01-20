import LoginComponent from "../../components/login/LoginComponent"
import "../Login/Login.scss"
const Login = () => {
    return (
        <div className="custom-container contLogin">
            <div className="row row_box">
                <div className="col-6 g-0">
                    <div className="login-image">
                        <div className="login-text">
                            <h1>CyberPlace</h1>
                            <h5 className="mt-5">Una tienda virtual de tecnología hecha para ti.</h5>
                        </div>
                    </div>

                </div>
                <div className="col-6 login-form">
                    <LoginComponent/>   
                </div>
            </div>
        </div>
    )
}

export default Login