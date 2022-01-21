import { useMutation } from '@apollo/client';

import { ADDITEMHISTORY } from './graphqlQM';
export const historyService = ()=>{

    const useAddItemHistory = () =>{
        return useMutation(ADDITEMHISTORY);
    }

    return {
        useAddItemHistory,
    }
}
