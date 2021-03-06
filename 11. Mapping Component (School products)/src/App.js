import React from 'react'
import Product from './Product'
import productsData from './vshoolProducts'

function App(){
const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
console.log(productsData);
    return(
        <div>
           {productComponents}
        </div>
    )
}

export default App