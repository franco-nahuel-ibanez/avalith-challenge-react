import React from 'react'

export const Producto = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <p>{product.description}</p>

            <p><span>Stock:</span> { product.stock ? 'Si' : 'No' } </p>
        </div>
    )
}
