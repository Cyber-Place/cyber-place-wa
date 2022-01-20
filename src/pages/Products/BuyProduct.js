import React from 'react'
import ProductList from '../../components/products/ProductList';
import { productService } from '../../services/product/productService';




function BuyProduct() {
    let accServ = productService();
    const {data, error, loading} = accServ.useGetAllProducts();
    
    return (
        <div className='buy-product'>
            <div className='custom-container mt-5'>
                <h2>Selecciona tu producto para comprar </h2>
                <table className="table" >
                    <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Calificación</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                {data && <ProductList products={data.allProducts} />}
            </div>
        </div>
    )
}

export default BuyProduct
