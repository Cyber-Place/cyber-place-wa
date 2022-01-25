import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { historyService } from '../../services/history/historyService';
import { productsService } from '../../services/products/productsService';
import Stars from '../stars/Stars';
import './History.scss';

function DateFormatEsp(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

function IntToMoney(price) {
    let value = price || 0;
    value = value >= 0 ? value : 0;
    let currValue = new Intl.NumberFormat('de-DE',
        {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(value);
    currValue = '$ ' + currValue;
    return currValue;
}

function HistoryCard(props) {
    const histServ = historyService();
    const prodServ = productsService();
    const navigate = useNavigate();

    const [deleteItemHistory] = histServ.useDeleteItemHistory();

    const state = useSelector(state => state);
    const jwt = state.account.jwt;


    const prodId = props.item.productId;
    const date = DateFormatEsp(props.item.searchTime);

    const { data: productData, error: productError } = prodServ.useGetProductById(prodId);
    if (productError) return null;

    const product = productData?.productsById;
    let currValue = IntToMoney((product ? product.price : 0));

    const handleVerInfo = e => {
        navigate("/products/" + product.id, { replace: true });
    }

    const handleDeleteItem = (e) => {
        if (jwt && product.id) {
            deleteItemHistory({ variables: { jwt: jwt, idItem: props.item.id }, onError: (error) => { console.log(error); }, onCompleted: () => props.refetch() });
        }
    };


    return (
        <div className="history-card">
            <li className="card">
                <img src={product && product.img_url} alt={'product#' + (product && product.id)} onClick={handleVerInfo} />
                <span className='name'>{product && product.name} </span>
                <span className='price'>{currValue}</span>
                <Stars stars={product && product.stars} />
                <span className='date mt-2 mb-3'>{date}</span>
                <button className='delete-item' onClick={handleDeleteItem}>Eliminar de la lista</button>
            </li>
        </div>
    )
}

export default HistoryCard
