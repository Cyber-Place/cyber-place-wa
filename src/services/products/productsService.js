import { useQuery, useLazyQuery } from '@apollo/client';

import { ALLPRODUCTS, PRODUCTBYID } from './graphqlQM';
export const productsService = ()=>{

    const useGetAllProducts = () =>{
        return useQuery(ALLPRODUCTS);
    }

    /*const useGetProductById = () =>{ 
        const [getProduct, data] = useLazyQuery(PRODUCTBYID,{
            onError: error => {
                console.log("Error consulta producto "+error);
            },
        });
        return {
            getProductById:(id) => getProduct({variables:{id}}),
            data:data
        }
        
    }*/

    const useGetProductById = (id) =>{ 
        const {data,error} = useQuery(PRODUCTBYID,{
            variables:{id},
            onError: error => {
                console.log("Error consulta producto "+error);
            },
        });
        return {data,error};
    }
    return {
        useGetAllProducts,
        useGetProductById,
    }
}
