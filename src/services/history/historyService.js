import { useMutation, useQuery } from '@apollo/client';

import { ADDITEMHISTORY, DELETEITEMHISTORY, DELETEMYHISTORY, MYHISTORY } from './graphqlQM';
export const historyService = ()=>{

    const useGetMyHistory = (jwt) => {
        return useQuery(MYHISTORY,{variables:{jwt},skip:!jwt, onError:(error)=>{console.log(""+error)},fetchPolicy: "network-only"});
    }

    const useAddItemHistory = () =>{
        return useMutation(ADDITEMHISTORY);
    }

    const useDeleteItemHistory = () =>{
        return useMutation(DELETEITEMHISTORY);
    }

    const useDeleteMyHistory = () =>{
        return useMutation(DELETEMYHISTORY);
    }

    return {
        useAddItemHistory,
        useGetMyHistory,
        useDeleteItemHistory,
        useDeleteMyHistory
    }
}
