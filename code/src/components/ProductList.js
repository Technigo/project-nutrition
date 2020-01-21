import React, { useEffect, useState } from 'react'
import { ScanBarcode } from 'components/ScanBarcode'
import { Link } from 'react-router-dom'

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://world.openfoodfacts.org/api/v0/product/[barcode].json')
            .then((res) => res.json())
            .then((json) => {
                setProducts(json)
                console.log(products)
                
            } 
            )
           
    },[])
 }         

    // function goBack() {
    //     window.history.back();
    // }
//     return (
//         <div className="">
//             {products.map((product) => (
//                 <div className="" key={product.id}>
//                     <Link to={`/products/${product.id}`}>
//                         <img src={`https://static.openfoodfacts.org/images/products/{product.image_url}.jpg`} alt={product.generic_name_en} />
//                         <div className="">
//                             <h1>{product.generic_name_en}</h1>
//                             <p>Released {""}</p>
//                         </div>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }





