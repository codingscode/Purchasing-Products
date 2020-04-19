import React, {useState} from 'react'

import {FormContainer, FormContent} from './form_style'
import generateId from '../../tools/generateId'

export default function Form({addProduct}) {
    const [product, setProduct] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')

    function sendHandle() {
        const data = {id: generateId(), product, type, price}

        addProduct(data)

        setProduct('')
        setType('')
        setPrice('')

    }

    return (
        <FormContainer>
           <FormContent>
             <h1>Add New Product</h1>
             <input placeholder="Product Name" id="product" type="text" name="product" value={product} 
                  onChange={e => setProduct(e.target.value)}/>
             <input placeholder="Product Type" id="type" type="text" name="type" value={type} 
                  onChange={e => setType(e.target.value)}/>
             <input placeholder="Product Price" id="price" type="text" name="price" value={price} 
                  onChange={e => setPrice(e.target.value)}/>
             <button className="button" onClick={sendHandle} type="button">Save</button>
           </FormContent>
       </FormContainer>
    )
}