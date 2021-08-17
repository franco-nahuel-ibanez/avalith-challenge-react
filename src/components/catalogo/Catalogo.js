import React, { useEffect, useState } from 'react';
import { data } from '../../data';
import { Formulario } from '../formulario/Formulario';
import { Producto } from '../producto/Producto';

export const Catalogo = () => {

    const [filterStock, setFilterStock] = useState(false)

    const [products, setProducts] = useState([])

    const handleToggleButton = () =>{
        setFilterStock( !filterStock )
    }

    const getProducts = async () => {
        const req = await fetch('https://fakestoreapi.com/products');
        const res = await req.json()
        
        setProducts(res)
    }

    const addProducts = (data) => {
        setProducts([
            data, ...products
        ])
    }

    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)
    return (
        <div>
            <h1>Catalogo de productos</h1>

           <Formulario 
                addProducts={ addProducts } 
                productLength={ products.length }    
            />

            {
                products.length !== 0 &&
                
                products.map( product => (
                    <Producto 
                        key= {product.id}
                        product={ product }
                    />
                ))

            }
        </div>
    )
}
