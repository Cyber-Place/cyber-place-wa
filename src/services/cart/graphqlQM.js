import { gql } from '@apollo/client';

export const GETCART   = gql`
        query getCartQuery($username: String!){
            shoppingListById(
                id:$username
            ){
                _id,
                product_list {
                    product_id,
                    quantity
                }
            }
        }
    `;


