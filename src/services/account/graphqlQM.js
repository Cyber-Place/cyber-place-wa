import { gql } from '@apollo/client';

export const ALL_PRODUCTS   = gql`
        mutation loginMut($username: String!, $password: String!){
            login(
                user:{
                    username: $username
                    password: $password
                }
            ){
                statusCode
                message
                data{
                    accessToken
                }
            }
        }
    `;