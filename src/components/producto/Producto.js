import React from 'react'

export const Producto = ({product}) => {
    return (
        <div>
            <h3>{product.title}</h3>

            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
            
            <p>{product.category}</p>

            <p>${product.price}</p>

            <p>{product.description}</p>

        </div>
    )
}
