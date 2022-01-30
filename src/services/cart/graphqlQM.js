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

export const UPDATECART   = gql`
        mutation updateCartMutation($username: String!,$cart: Any){
            updateShoppingLISt(
                id:$username,
                shoppingList:$cart

            ){
                _id,
                product_list {
                    product_id,
                    quantity
                }
            }
        }
    `;


