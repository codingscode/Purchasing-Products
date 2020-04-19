import React from 'react'

import priceFormat from '../../tools/priceFormat.js'
import {TableContainer, TableContent} from './table_style'

const TableHead = () => {
    return (
       <thead>
          <tr>
             <th>Products</th>
             <th>Type</th>
             <th>Price</th>
             <th>Remove</th>
          </tr>
       </thead>
    )
}

const TableBody = ({products, removeProduct}) => {
    return (
       <tbody>
         {products.map(current => (
            <tr key={current.id}>
                <td>{current.product}</td>
                <td>{current.type}</td>
                <td>{priceFormat(current.price)}</td>
                <td>
                   <button onClick={() => removeProduct(current.id)}>&#215;</button>
                </td>
            </tr>
         ))}
       </tbody>
    )
}

export default function Tabela({products, removeProduct}) {
    return (
       <TableContainer>
          <TableContent>
              <TableHead />
              <TableBody products={products} removeProduct={removeProduct} />
          </TableContent>
       </TableContainer>
    )
}
