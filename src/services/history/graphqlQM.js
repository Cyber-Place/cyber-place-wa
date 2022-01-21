import { gql } from '@apollo/client';

export const ADDITEMHISTORY   = gql`
        mutation additemMut($jwt: String!, $productId: Int!){
            addItemMyHistory(jwt:$jwt,item:{productId:$productId}){
                id
                username
              }
        }
    `;

export const MYHISTORY   = gql`
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

