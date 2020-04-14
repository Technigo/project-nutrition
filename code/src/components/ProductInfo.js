import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'


const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding-bottom: 100px;
    border: 1px solid red;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px;
    border-radius: 6px;
    background: white;
    margin: 5%;
`
const H1 = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const HeadSection = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: flex-start;
    align-items: baseline;
    padding: 13%;
`
const ThumbImg = styled.img`
    width: 10vw;
    height: auto;
    margin-right: 15px;
`
const H2 = styled.h2`
    font-size: 25px;
    margin-bottom: 0;
`
const Quantity = styled.p`
    display: flex;
    flex-direction: row;
    padding-left: 2%;
`
const IngredientSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 45%;
    padding-left: 5%;
    max-width: 45%;
`
const MiddleSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    font-size: 18px;
    padding: 7%;
`
const ATagSection = styled.div`
    display: flex;
    align-self: center;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    max-width: 50%;
`
const H3 = styled.h3`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 3vw;
`
const P = styled.p`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0;
    line-height: 1.6;
    text-transform: capitalize;
    font-size: 15px;
`
const A = styled.a`
    color: black;
`

/**** To show the product info  ****/

export const ProductInfo = () => {
    const product = useSelector((state) => state.products.product)
    if (!product) return null

    const allergens = product.product && product.product.allergens_tags.map(allergen =>
        allergen.replace('en:', '')
    )


    return (
        <div>
            {product.product && product.status === 1 && (
                <Section>
                    <H1>Product information:</H1>
                    <HeadSection>
                        <ThumbImg src={product.product.image_thumb_url} alt="" ></ThumbImg>
                        <H2>{product.product.product_name}</H2>
                        <Quantity>{product.product.quantity}</Quantity>
                        <h4>{product.product.brand}</h4>
                    </HeadSection>
                    <MiddleSection>
                        <Img src={product.product.image_url} ></Img>
                        <IngredientSection>
                            <h4>Ingredients: </h4>
                            <div>
                                <h4>Eng: </h4>
                                <P>{product.product.ingredients_text_en}</P>
                            </div>
                            <div>
                                <h4>Sve:</h4>
                                <P>{product.product.ingredients_text_sv}</P>
                            </div>
                            <div>
                                <h4>Allergens: </h4>
                                <P>{allergens}</P>
                            </div>
                        </IngredientSection>
                    </MiddleSection>

                    <ATagSection>
                        <A href={product.product.link}>{product.product.link}</A>
                    </ATagSection>
                </Section>
            )}
            <Section >
                {product.status === 0 && <H3>Sorry {product.status_verbose}</H3>}
            </Section>
        </div>
    )
}


