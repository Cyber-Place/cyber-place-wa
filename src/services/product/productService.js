import { useQuery } from '@apollo/client';

import { ALLPRODUCTS } from './graphqlQM';
export const productService = ()=>{

    const useGetAllProducts = () =>{
        return useQuery(ALLPRODUCTS);
    }

    return {
        useGetAllProducts,
    }
}
