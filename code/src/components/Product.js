import React from 'react'
import { useSelector } from 'react-redux'
import './Product.css'

export const Product = () => {
  const scan = useSelector(state => state.products.product)

  if (!scan) return null

  console.log('SCAN', scan)

  const formattedCategories =
    scan.product &&
    scan.product.categories_tags.map(cat =>
      cat.replace('en:', '').replace(/-/gi, ' ')
    )

    const formattedAllergens =
    scan.product &&
    scan.product.allergens_tags.map(all =>
      all.replace('sv:', '').replace(/-/gi, ' ')
    )  
  /*
  replace can be used with string or regular expression. When used with a string, as in the first example -> .replace('en:', '') it will replace the first time this string occurs. Also since we're mapping through an array this will happen for each item in the array.
  If the replace method is used with a regex (regular expression) like in the second example -> it will replace all the '-'with a ' ' (space) not only the first time for each item in the array. 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  */
  console.log('CAT', formattedCategories)

  return (
    <>
      {scan.product && scan.status === 1 && (
        <section className='product-container'>
          <span className="product-info">
            <h1 className='title'>{scan.product.product_name}</h1>
            <img className='picture' alt={scan.product.product_name} src={scan.product.image_front_small_url} />
          </span>
          <h3>Ingredients:</h3>
            <img className='nutriton' alt="ingredients-name" src={scan.product.image_ingredients_url} />
          <h3>Allergens:</h3>
            {formattedAllergens.map((all, index) => (
            <li key={index}>{all}</li>
          ))}
          <h3>Search tips for simular categories:</h3>
            <ul>
              {formattedCategories.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>
        </section>
      )}
      {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  )
}
