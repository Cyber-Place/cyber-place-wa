import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MYHISTORY } from '../../services/history/graphqlQM';



export const History = () => {
    const state = useSelector(state => state);
    const access = state.account;

    let navigate = useNavigate();
    const token = window.localStorage.getItem("userToken");
    const { data: myHistoryData } = useQuery(MYHISTORY, {
        skip: !token ,
        variables: { jwt:token}, onError: error =>{} 
        }
    )
    const myHistory = myHistoryData?.mySearchHistory;
    console.log(myHistory)

    useEffect(() => {
        if(!token)navigate("../", { replace: true });
    }, [token])

    console.log(myHistoryData)
    
    return (
        <div className="history">
            
        </div>
    )
}
