import { useMutation } from '@apollo/client';
import { ALL_PRODUCTS } from './graphqlQM';


export const accountService = ()=>{
    const useLogin = () =>{
        const result = useMutation(ALL_PRODUCTS);
        console.log(result);
        return result;
    };
    return{
        useLogin,
    }
}