import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HistoryList from '../../components/history/HistoryList';
import { historyService } from '../../services/history/historyService';

import './History.scss';


export const History = () => {
    const navigate = useNavigate();
    const histServ = historyService();

    const state = useSelector(state => state);
    const access = state.account;
    
    const { data: historyData } = histServ.useGetMyHistory(access.jwt);
    const history = historyData?.mySearchHistory?.items;
    useEffect(() => {
        if (!histServ.isLoggedStorage()) navigate("/", { replace: true });
    }, [histServ,navigate])
    
    return (
        <div className="history">
            <div className='custom-container'>
                <h4>Tu historial de búsqueda</h4>
                {history && <HistoryList history={history}/>}
            </div>
        </div>
    )
}
