import { useMutation, useQuery } from '@apollo/client';

import { ADDITEMHISTORY, MYHISTORY } from './graphqlQM';
export const historyService = ()=>{

    const useGetMyHistory = (jwt) => {
        return useQuery(MYHISTORY,{variables:{jwt},skip:!jwt, onError:(error)=>{console.log(""+error)},fetchPolicy: "network-only"});
    }

    const useAddItemHistory = () =>{
        return useMutation(ADDITEMHISTORY);
    }

    const isLoggedStorage = () =>{
        return !!window.localStorage.getItem("userToken");
    }

    return {
        useAddItemHistory,
        useGetMyHistory,
        isLoggedStorage
    }
}
