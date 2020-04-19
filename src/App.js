import React, { useState } from "react"

import Head from './components/Head/head'
import Tabela from './components/Table/table'
import Form from './components/Form/form'


function App() {
      const [products, setProducts] = useState([
          {id: 1, product: 'PC', type: 'Eletronic', price: 600},
          {id: 2, product: 'English Course', type: 'Book', price: 50},
          {id: 3, product: 'Shirt', type: 'Clothing', price: 23},
          {id: 4, product: 'TV', type: 'Eletronic', price: 400}
      ])

      function removeProduct(id) {
         setProducts(products.filter(current => current.id !== id))
      }

      function addProduct(current) {
         setProducts([...products, current])
      }

      return (
          <>
          <Head />
          <Tabela products={products} removeProduct={removeProduct}/>
          <Form addProduct={addProduct}/>
          </>
      )
}

export default App
