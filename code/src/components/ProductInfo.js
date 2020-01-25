import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// import { Link } from 'react-router-dom';
import { Header } from 'components/Header'
import { BottomBar } from 'components/BottomBar'
import { ScanBarcode } from './ScanBarcode'

const Main = styled.div`
display: flex;
flex-direction: row;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 99.65%;
    height: auto;
    padding-bottom: 100px;
    border: 1px solid red;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px;
    border-radius: 6px;
    background: white;
    margin-bottom: 20px;
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
`
const Quantity = styled.p`
    padding-left: 2%;
`
const IngredientSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    font-size: 18px;
`
const StoreSection = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 18px;
`
const ImgSection = styled.div`
    display: flex;
    align-self: center;
`

const Img = styled.img`
    width: fit-content;
    height: auto;
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
`

/**** To show the product info  ****/

export const ProductInfo = () => {
    // const [products, setProducts] = useState()


    const product = useSelector((state) => state.products.product)
    // const split = () => {
    //     product.split(product.product.ingredients_tags(','))


    if (!product) return null

    // }

    console.log('product', product)
    console.log('product status', product.status)

    return (
        <div>
            {/* <Header /> */}
            {/* <Main>
               
                <Link className="back-link" to="/">
                    <svg className="back-link-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
                    <p>Scan Barcode</p>
                </Link>
            </Main> */}


            {product.product && product.status === 1 && (
                <Section >

                    <H1>Product information:</H1>
                    <HeadSection>
                        <ThumbImg src={product.product.image_thumb_url} alt="" ></ThumbImg>
                        <H2>{product.product.product_name}</H2>
                        <Quantity>{product.product.quantity}</Quantity>
                        <h4>{product.product.brand}</h4>
                    </HeadSection>
                    <MiddleSection>
                        <Img src={product.product.image_url} ></Img>
                        {/* <p>{product.product.split}</p> */}
                        {/* <P>{product.product.ingredients_tags}</P>
                        <P>{product.product.ingredients_original_tags}</P> */}
                        <IngredientSection>
                            <P>Ingredients:</P>
                            <P>{product.product.ingredients_text_en}</P>
                            {/* {product.product.ingredients_text_en.map(ingredient => (
                            <p>{ingredient}</p> */}
                            {/* ))} */}
                            <P>{product.product.allergens}</P>
                        </IngredientSection>
                    </MiddleSection>
                    {/* <StoreSection>
                        <p>{product.product.stores}</p>
                    </StoreSection> */}
                    <ImgSection>
                        {/* <Img src={product.product.image_url} ></Img> */}
                        <P>{product.product.link}</P>
                    </ImgSection>
                    {/* <img src={product.product && product.product.image_nutrition_url} />
                <img src={product.product && product.product.images[1]} />
                <img src={product.product && product.product.images[1].sizes[100]} />
                <img src={product.product && product.product.images[1].sizes[400]} />
                <p>{product.product && product.product._keywords[1]}</p>
                <p>{product.product && product.product.ingredients_original_tags}</p> */}


                </Section>
            )}

            <Section >
                {product.status === 0 && <H3>Sorry {product.status_verbose}</H3>}
            </Section>
            {/* <BottomBar /> */}
        </div>
    )

}


