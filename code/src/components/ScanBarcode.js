import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/facts'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import code from 'assets/code.jpg'

const Button = styled.button`
    height:50px;
    width:200px;
    background: palevioletred;
    border-radius: 4px;
    border: 2px solid palevioletred;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    font-size:16px;
    font-weight:bold;
    `
const Title = styled.h1`
    margin:0 0 50px;
    background-color:lightblue;
    padding:15px;
    border-radius:4px;`

const Image = styled.img`
    height:20%;
    width:20%;
    margin-bottom:50px;
    border-radius:4px;
    `
const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    `


export const ScanBarcode = () => {
    const dispatch = useDispatch()
    const [showScanner, setShowScanner] = useState(false)

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
                <BarcodeScanner onDetected={(code) => {
                    console.log('Got barcode', code)
                    setShowScanner(false)
                    dispatch(fetchProduct(code))
                }} />

            )}
        </>
    )
}