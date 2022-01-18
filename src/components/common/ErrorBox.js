import React from 'react'
import './ErrorBox.scss'

const ERROR_MESSAGES = {
    'Request failed with status code 404' : 'Datos no encontrados',
    'Request failed with status code 503' : 'Los datos ingresados ya se encuentran en uso'
};
const ErrorBox = ({errorMessage}) => {
    return (
        <div className="error-msg">
            {ERROR_MESSAGES[errorMessage] || errorMessage}
        </div>
    )
}

export default ErrorBox