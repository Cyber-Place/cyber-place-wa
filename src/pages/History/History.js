import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HistoryComponent from '../../components/history/HistoryComponent';
import { MYHISTORY } from '../../services/history/graphqlQM';

import './History.scss';


export const History = () => {
    

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
            <HistoryComponent myHistory={myHistory}/>
        </div>
    )
}
