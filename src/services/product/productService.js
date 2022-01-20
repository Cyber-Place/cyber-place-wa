import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { ALLPRODUCTS, PRODUCTBYID } from './graphqlQM';
export const productService = ()=>{

    const useGetAllProducts = () =>{
        return useQuery(ALLPRODUCTS);
    }

    const useGetProductById = ({variables}) =>{
        let navigate = useNavigate();
        return useQuery(PRODUCTBYID,{
            variables,
            onError: error => {
                navigate("/not-found/", { replace: true });
            },
        });
    }

    return {
        useGetAllProducts,
        useGetProductById,
    }
}
