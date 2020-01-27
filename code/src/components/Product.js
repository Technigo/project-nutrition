import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Error = styled.h1`
    font-size:25px;
`

const Title = styled.h1`
    margin: 10px 15px 0 15px;
    font-size: 20px;
`

const Text = styled.p`
    margin:10px 15px 0 15px;
    display:inline-block;
`
const Infobox = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center:
    align-items:center;
    width:auto;
`

const Picture = styled.img`
    align-self:center;
    width:30%;
    margin:10px;
`

export const Product = () => {
    const scan = useSelector(state => state.products.product)

    if (!scan) return null

    console.log('scan', scan)

    return (
        <>
            {scan.product && scan.status === 1 && (
                <Infobox>
                    <Title>Product Name: {scan.product && scan.product.product_name}</Title>
                    <Text>Nutrition Grade: {scan.product && scan.product.nutrition_grades}</Text>
                    <Picture src={scan.product && scan.product.image_url} />
                </Infobox>
            )}
            {scan.status === 0 && <Error>{scan.status_verbose}</Error>}
        </>
    )
}