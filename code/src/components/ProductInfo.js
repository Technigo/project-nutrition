import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// import { Link } from 'react-router-dom';
// import { Header } from 'components/Header'
import { BottomBar } from 'components/BottomBar'
import { ScanBarcode } from './ScanBarcode'

const Main = styled.div`
display: flex;
flex-direction: row;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-bottom: 100px;
  
`
const HeadSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`
const MiddleSection = styled.div`
    display: flex;
    flex-direction: row;
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
const ThumbImg = styled.img`
    width: fit-content;
    height: auto;
`
const Img = styled.img`
    width: fit-content;
    height: auto;
`

/**** To show the product info  ****/

export const ProductInfo = () => {
    // const [products, setProducts] = useState()
    const product = useSelector((state) => state.products.product)

    if (!product) return null

    console.log('product', product)

    return (
        <div>
            {/* <Main>
                <Header />
                <Link className="back-link" to="/">
                    <svg className="back-link-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
                    <p>Scan Barcode</p>
                </Link>
            </Main> */}


            {/* {product.product && ( */}
            <Section >

                <h1>Product info:</h1>
                <HeadSection>
                    <ThumbImg src={product.product && product.product.image_thumb_url} alt="" ></ThumbImg>
                    <p>{product.product && product.product.product_name}</p>
                </HeadSection>
                <MiddleSection>
                    <p>{product.product && product.product.ingredients_tags}</p>
                    <p>{product.product && product.product._keywords}</p>
                </MiddleSection>
                <StoreSection>
                    <p>{product.product && product.product.stores}</p>
                </StoreSection>
                <ImgSection>
                    <Img src={product.product && product.product.image_url} ></Img>
                </ImgSection>
                {/* <img src={product.product && product.product.image_nutrition_url} />
                <img src={product.product && product.product.images[1]} />
                <img src={product.product && product.product.images[1].sizes[100]} />
                <img src={product.product && product.product.images[1].sizes[400]} />
                <p>{product.product && product.product._keywords[1]}</p>
                <p>{product.product && product.product.ingredients_original_tags}</p> */}


            </Section>
            )}
            {/* {product.status === 0 && <Error msg={product.status_verbose} />} */}
            <BottomBar />
        </div>
    )
}


