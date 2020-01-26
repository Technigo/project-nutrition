import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/facts'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components/macro"
import code from 'assets/code2.jpg'

const Button = styled.button`
    height:50px;
    width:200px;
    background: lightblue;
    border-radius: 6px;
    border: 2px solid lightblue;
    box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 22px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    color: black;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    font-size:16px;
    font-weight:bold;
    cursor: pointer;
    `

const Title = styled.h1`
font-size:33px;
    margin:0 0 50px;
    background-color:white;
    border-radius:6px;
    text-shadow:2px 2px 1px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
   text-align:center;
  }
`

const Image = styled.img`
    height:40%;
    width:40%;
    border-radius:6px;
    margin-bottom:50px;

    @media (max-width: 768px) {
   margin-bottom:20px;
   
  }
    `
const Wrap = styled.div`
    background-color:white;
    max-width:800px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px 0;
    border-radius:8px;

    @media (max-width: 768px) {
    padding:20px;
  }
    `


export const ScanBarcode = () => {
    const dispatch = useDispatch()
    const [showScanner, setShowScanner] = useState(false)
    const json = useSelector(state => state.facts.product)

    if (json !== null) {
        return null
    }

    return (
        <>
            {!showScanner && (
                <>
                    <Wrap>
                        <Title>What do you wanna scan today?</Title>
                        <Image alt="barcode" src={code} />
                        <Button type="button" onClick={() => setShowScanner(true)}>
                            Show Scanner</Button>
                    </Wrap>
                </>
            )}

            {showScanner && (
                <BarcodeScanner className="Scanner" onDetected={(code) => {
                    console.log('Got barcode', code)
                    setShowScanner(false)
                    dispatch(fetchProduct(code))
                }} />

            )}
        </>
    )
}