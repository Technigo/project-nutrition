import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { facts, fetchProduct } from 'reducers/facts'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components/macro"
import code from 'assets/code2.jpg'

const Button = styled.button`
    height:50px;
    width:200px;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    border-radius: 6px;
    border: 2px solid lightblue;
    background: lightblue;
    box-shadow:2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size:16px;
    font-weight:bold;
    cursor: pointer;
    &:hover {
        transform: translate(2px, 2px);
    }
`

const TextButton = styled(Button)`
    height:auto;
    width:auto;
    padding:5px 8px;
    margin-top: 10px;
    box-shadow:2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size:14px;
    &:hover {
        transform: translate(1px, 1px);
    }
`

const Title = styled.h1`
    margin:0 0 50px;
    background-color:white;
    border-radius:6px;
    text-shadow:2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size:33px;

    @media (max-width: 768px) {
        text-align:center;
    }
`

const Image = styled.img`
    height:auto;
    width:40%;
    margin-bottom:50px;
    border-radius:6px;

    @media (max-width: 768px) {
        margin-bottom:20px;
    }
`
const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px 0;
    border-radius:8px;
    background-color:white;

    @media (max-width: 768px) {
        padding:20px;
    }
`


export const ScanBarcode = () => {
    const dispatch = useDispatch()
    const [showScanner, setShowScanner] = useState(false)
    const products = useSelector(state => state.facts.products)

    return (
        <>
            {!showScanner && (
                <Wrap>
                    {!products.length && (
                        <>
                            <Title>What do you wanna scan today?</Title>
                            <Image alt="barcode" src={code} />
                        </>
                    )}
                    <Button type="button" onClick={() => setShowScanner(true)}>
                        {!products.length ? 'Show Scanner' : 'Scan again'}</Button>

                    {products.length > 0 &&
                        <TextButton type="button" onClick={() => dispatch(facts.actions.clearProducts())}>Clear products</TextButton>}
                </Wrap>
            )
            }

            {
                showScanner && (
                    <BarcodeScanner className="Scanner" onDetected={(code) => {
                        console.log('Got barcode', code)
                        setShowScanner(false)
                        dispatch(fetchProduct(code))
                    }} />
                )
            }
        </>
    )
}