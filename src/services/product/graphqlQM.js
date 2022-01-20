import { gql } from '@apollo/client';

export const ALLPRODUCTS   = gql`
    query allproductsQuery{
        allProducts{
            id
            name
            price
            stars
            img_url
        }
    }
`;

export const PRODUCTBYID   = gql`
    query productbyidQuery($id: Int!){
        productsById(
            id:$id
        ){
            id
            name
            price
            description
            stars
            img_url
        }
    }
`;
