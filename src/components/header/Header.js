import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Menu test</h1>
            <nav>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/login">Login</Link>
                <br/>
                <Link to="/register">Register</Link>
            </nav>
            
        </div>
    )
}

export default Header
