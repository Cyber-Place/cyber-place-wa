import React from 'react'

function Products() {
    return (
        <div>
            <h2>Gestión de productos</h2>
            <br />
            <ul>
                <div>
                    <a href="/product/add">Agregar</a>
                </div>
                <div>
                    <a href="/product/edit">Editar</a>
                </div>
                <div>
                    <a href="/product/delete">Borrar</a>
                </div>
            </ul>
        </div>
    )
}

export default Products
