import { gql } from '@apollo/client';

export const ALLPRODUCTS   = gql`
    query getAllProducts{
        allProducts{
            id
            name
            price
            description
            stars
        }
    }
`;