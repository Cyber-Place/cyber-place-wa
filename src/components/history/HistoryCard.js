import { useQuery } from '@apollo/client';
import { stringifyForDisplay } from '@apollo/client/utilities'
import React from 'react'
import '../../pages/History/History.scss'
import { PRODUCTBYID } from '../../services/products/graphqlQM';

function HistoryCard(props) {
    const idProd = props.item.productId;
    const { data: productData } = useQuery(PRODUCTBYID,{variables: { id:idProd }, onError: error => {}});
    const producto = productData?.productsById;
    
    
    return (
        <div className="col-sm-3 mt-5">
            {stringifyForDisplay (producto)}
        </div>
    )
}

export default HistoryCard
