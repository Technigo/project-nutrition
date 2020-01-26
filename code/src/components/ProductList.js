import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'lib/Card'
import { Error } from 'components/Error'
import styled from 'styled-components/macro'

export const ProductList = () => {
  const scan = useSelector((state) => state.products.product)
  // const scannedProductCode = useSelector(state => state.products.product.code)
  // const scannedProduct = useSelector(state => state.products.product.product)

  if (!scan) return null

  console.log('SCAN', scan)

  // const formattedCategories =
  //   scan.product &&
  //   scan.product.categories_tags.map((cat) => cat.replace('en:', ' #').replace('-', ' '))
  // console.log("CAT", formattedCategories)

  return (
    <>
      {scan.product && scan.status === 1 && (
        <Card
          thumbNailUrl={scan.product.image_thumb_url}
          title={scan.product.product_name}
          coverImage={scan.product.image_url}
          secondaryText={scan.product.brands}>
          {scan.product._keywords.map((keyword) =>
            <Chip key={keyword}>#{keyword}</Chip>)}
          {/* <Chip>{formattedCategories}</Chip> */}
          <Text>More info about the product:<br></br>
            <Link a href={`https://world.openfoodfacts.org/product/${scan.product.code}/`}>{scan.product.product_name} on Open Food Facts</Link>
          </Text>
        </Card>
      )}
      {scan.status === 0 && <Error msg={scan.status_verbose} />}
    </>
  )
}

const Chip = styled.div`
  display: inline-flex;
  background: #f1f1f1;
  border: palevioletred solid 1px;
  color: #707070;
  font-size: 14px;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  `

const Link = styled.a`
color: palevioletred;
font-size: 16px;
  `
const Text = styled.h3`
font-size: 18px;
font-weight: 500;
  `
