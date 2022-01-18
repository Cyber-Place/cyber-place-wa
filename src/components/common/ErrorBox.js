import React from 'react'
import './ErrorBox.scss'

const ERROR_MESSAGES = {
    'Request failed with status code 404' : 'Datos no encontrados',
    'Datos incompletos' : 'Datos incompletos',
};
const DEFAULT_MESSAGE = 'Error en la solicitud';
const ErrorBox = ({errorMessage}) => {
    return (
        <div className="error-msg">
            {ERROR_MESSAGES[errorMessage] || DEFAULT_MESSAGE}
        </div>
    )
}

export default ErrorBox