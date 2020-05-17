import React from 'react'
import { useSelector } from 'react-redux'

export const CheeseInfo = () => {
  const scanned = useSelector((state) => state.products.product)

  if (scanned.product.nutriscore_data && scanned.product.nutriscore_data.is_cheese) {
    return (
      scanned.product.nutriscore_data.is_cheese === 0 ? <h2>It's not cheese <span role="img" aria-label="sad emoji">😞</span></h2> : <h2>It's cheese! <span role="img" aria-label="cheese">🧀</span> </h2>)
  } else {
    return (
      <h2>Sorry, we dont have any info about this product.</h2>)
  }
}

// We would like some feedback on how to handle when there is no is_cheese-property on a given product in the API.
// We have tried the following solutions so far:

 // if (scanned.product.nutriscore_data.is_cheese === 0) {
  //   return (<h2>It's not cheese 😞</h2>)
  // } else if (scanned.product.nutriscore_data.is_cheese === 1) {
  //   return (<h2>It's cheese! 🧀</h2>)
  // } else { return (<h2>Sorry, we dont have any info about this product.</h2>)
  // }

//   if (!scanned.product.nutriscore_data.is_cheese) {
//     return (
//       <h2>Sorry, we dont have any info about this product.</h2>)
//     } else {
//     return (
//       scanned.product.nutriscore_data.is_cheese === 0 ? <h2>It's not cheese 😞</h2> : <h2>It's cheese! 🧀</h2>)
//   }
// }