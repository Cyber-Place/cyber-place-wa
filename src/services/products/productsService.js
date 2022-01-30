import { useQuery } from '@apollo/client';

import { ALLPRODUCTS, PRODUCTBYID } from './graphqlQM';
export const productsService = ()=>{

    const useGetAllProducts = () =>{
        return useQuery(ALLPRODUCTS);
    }


    const useGetProductById = (id) =>{ 
        const {data,error} = useQuery(PRODUCTBYID,{
            variables:{id},
            onError: error => {
                console.log("Error consulta producto "+error);
            },
            fetchPolicy: "network-only",
        });
        return {data,error};
    }
    return {
        useGetAllProducts,
        useGetProductById,
    }
}
