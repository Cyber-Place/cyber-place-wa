import { gql } from '@apollo/client';

export const GETCART   = gql`
        query getCartQuery($username: String!){
            shoppingListById(
                id:$username
            ){
                _id,
                product_list {
                    product{
                        id,
                        name,
                        price,
                        description,
                        stars,
                        img_url
                    },
                    quantity
                }
            }
        }
    `;

export const UPDATECART   = gql`
        mutation updateCartMutation($username: String!,$cart: purchaseUpdateShoppingListInput!){
            updateShoppingList(
                id:$username,
                shoppingList:$cart

            ){
                _id,
                product_list {
                    product{
                        id,
                        name,
                        price,
                        description,
                        stars,
                        img_url
                    },
                    quantity
                }
            }
        }
    `;


