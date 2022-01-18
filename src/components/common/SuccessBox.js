import React from 'react'
import './SuccessBox.scss'

const SUCCESS_MESSAGES = {
    'Register new account successfully' : 'Registro exitoso',
};

const SuccessBox = ({successMessage}) => {
    return (
        <div className="success-msg">
            { SUCCESS_MESSAGES[successMessage] || successMessage }
        </div>
    )
}

export default SuccessBox