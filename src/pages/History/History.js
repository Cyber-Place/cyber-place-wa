import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HistoryList from '../../components/history/HistoryList';
import { accountService } from '../../services/account/accountService';
import { historyService } from '../../services/history/historyService';
import { ReactComponent as Trash } from '../../assets/icons/trash-fill.svg';

import './History.scss';
import HistoryNoItems from '../../components/history/HistoryNoItems';


export const History = () => {
    const navigate = useNavigate();
    const histServ = historyService();
    const accServ = accountService();

    const [deleteMyHistory] = histServ.useDeleteMyHistory();

    const state = useSelector(state => state);
    const access = state.account;
    const jwt = access.jwt;

    const { data: historyData, refetch } = histServ.useGetMyHistory(access.jwt);
    const history = historyData?.mySearchHistory?.items;

    useEffect(() => {
        if (!accServ.isLoggedStorage()) navigate("/", { replace: true });
    }, [accServ, navigate])

    const handleDeleteHistory = (e) => {
        if (jwt) {
            deleteMyHistory({ variables: { jwt: jwt }, onError: (error) => { console.log(error); }, onCompleted: () => refetch() });
        }
    };     

    return (
        <div className="history">
            <div className='custom-container'>
                <div className='head-container'>
                    <h4>Tu historial de búsqueda</h4>
                    <button className='delete-button' onClick={handleDeleteHistory}><Trash className='me-3'/>Eliminar todos los artículos</button>
                </div>
                {history && (history.length > 0 ? <HistoryList history={history} refetch={refetch}/> : <HistoryNoItems/> ) }
            </div>
        </div>
    )
}
