import React from 'react'
import HeaderLogged from './HeaderLogged'
import HeaderUnlogged from './HeaderUnlogged'

import { useSelector } from 'react-redux';

const Header = () => {
    const state = useSelector(state => state);
    const access = state.account;

    return (
        <div className='header'> 
            {access.isLogged === true ? <HeaderLogged/> : <HeaderUnlogged/> }
        </div>
    )
}

export default Header
