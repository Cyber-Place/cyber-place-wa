import { gql } from '@apollo/client';

export const GETCART   = gql`
        query getcart($username: String!){
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


