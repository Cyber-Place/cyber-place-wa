import { useMutation, useQuery } from '@apollo/client';

import { GETCART, UPDATECART } from './graphqlQM';
export const cartService = () => {


    const useGetCart = (username) => {
        
        const { data, error } = useQuery(GETCART,
            { variables: { username: username }, skip:!username, onError:(error)=>{console.log("Error consulta carrito de compra " + error)} });
        return {data, error};
    }

    const useUpdateCart = () => {
        return useMutation(UPDATECART);
    }

    return {
        useGetCart,
        useUpdateCart,
    }
}
