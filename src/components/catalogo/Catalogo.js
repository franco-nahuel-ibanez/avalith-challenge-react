import React, { useState } from 'react';
import { data } from '../../data';
import { Producto } from '../producto/Producto';

export const Catalogo = () => {

    const [filterStock, setFilterStock] = useState(false)

    const handleToggleButton = () =>{
        setFilterStock( !filterStock )
    }

    return (
        <div>
            <h1>Catalogo de productos</h1>

            <button
                onClick={ handleToggleButton }
            >
                filtrar
            </button>
            {
                filterStock 
                    ? data.map( producto => <Producto key={producto.name} product={producto} />  )
                    : data.filter( index => index.stock === true ).map(producto => <Producto key={producto.name} product={producto} />) 
            }
        </div>
    )
}
