import { useMutation, useQuery } from '@apollo/client';

import { GETCART, UPDATECART } from './graphqlQM';
export const cartService = () => {


    const useGetCart = (username) => {

        const { data, error, refetch } = useQuery(GETCART,
            { variables: { username: username }, skip: !username, onError: (error) => { console.log("Error consulta carrito de compra " + error) }, fetchPolicy: "network-only" });
        return { data, error, refetch };
    }

    const useUpdateCart = () => {
        return useMutation(UPDATECART);
    }

    return {
        useGetCart,
        useUpdateCart,
    }
}
