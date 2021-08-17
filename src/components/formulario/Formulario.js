import React, { useState } from 'react'

export const Formulario = ( {addProducts, productLength } ) => {
    
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        category: ''
    })

    const handleInputChange = (e) =>{
        setFormData({
            ...formData,
            id: productLength + 1,
            [e.target.name] : e.target.value            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
        addProducts( formData )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                placeholder="Nombre del producto"
                required
                type="text"
                name="title"
                onChange={ handleInputChange }
            />
            <br/>
            <br/>
            <input 
                placeholder="Precio del producto"
                required
                type="text"
                name="price"
                onChange={ handleInputChange }
            />
            <br/>
            <br/>
            <input 
                placeholder="Descripcion del producto"
                required
                type="text"
                name="description"
                onChange={ handleInputChange }
            />
            <br/>
            <br/>
            <input 
                placeholder="Categoria"
                required
                type="text"
                name="category"
                onChange={ handleInputChange }
            />
            <br/>
            <br/>
            <button
                type="submit"
            >
                Crear
            </button>
        </form>
    )
}
