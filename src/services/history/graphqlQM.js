import { gql } from '@apollo/client';

export const ADDITEMHISTORY = gql`
        mutation additemMut($jwt: String!, $productId: Int!){
            addItemMyHistory(jwt:$jwt,item:{productId:$productId}){
                id
                username
              }
        }
    `;

export const MYHISTORY = gql`
    query myhistoryQue($jwt:String!){
        mySearchHistory(jwt:$jwt){
            id
            username
            items{
                id
                searchTime
                productId
            }
        }
    }
`;

export const DELETEITEMHISTORY = gql`
    mutation delitemMut($jwt:String!, $idItem: String!){
        deleteItemMyHistory(jwt:$jwt, idItem:$idItem){
            id
            username
        }
    }
`;

export const DELETEMYHISTORY = gql`
    mutation delhistMut($jwt:String!){
        deleteMyHistory(jwt:$jwt){
            id
            username
        }
    }
`;

