import { gql } from '@apollo/client';

export const LOGIN   = gql`
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


export const REGISTER   = gql`
    mutation registerMut($username: String!, $full_name: String!, $email: String!, $password: String!){
        register(
            user:{
                username: $username
                full_name: $full_name
                email: $email
                password: $password
            }
        ){
            message
        }
    }
`;

export const GETUSERNAME   = gql`
    query usernameQue($jwt: String!){
        getusername(
            jwt:$jwt
        ){
            message,
            data
        }
    }
`;