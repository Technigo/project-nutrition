import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Header } from 'components/Header'
import { BottomBar } from 'components/BottomBar'


const BarcodeKey = 7394376616037 //ikaffe

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 100px 0 50px;
`

const Scanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
`
const BarcodeIcon = styled.img`
    width: 300px;
    height: auto;
`

const ShowScannerBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    width: 170px;
    height: 50px;
    border-radius: 25px;
    font-size: 2vw;
    text-transform: uppercase;
    border: none;
    @media (min-width: 788px) and (max-width: 1050px) {
        font-size: 1.5vw;
    }
    @media (min-width: 1051px) {
        font-size: 1vw;
    }
`
const Icon = styled.img`
    width: 25px;
    height: auto;
    margin: 8px;

`


export const ScanBarcode = (product) => {
    const [showScanner, setShowScanner] = useState(false)
    // const [products, setProducts] = useState()
    const dispatch = useDispatch()



    return (
        <Section >
            <Header />
            {/* <Link to="/productinfo" ></Link> */}

            <LoadingIndicator />
            <Scanner>
                <BarcodeIcon src="/assets/barcode-icon.svg"></BarcodeIcon>
                {showScanner && (
                    <BarcodeScanner onDetected={(code) => {
                        console.log('Got barcode', code)
                        // dispatch(fetchBarcodes(code)) //this is the original code.
                        dispatch(fetchBarcodes(BarcodeKey)) //this will give information about iKaffe.
                        setShowScanner(false)
                    }} />
                )}

            </Scanner>
            <h5>Scan your barcode to see information about your product</h5>
            {!showScanner && (
                <ShowScannerBtn type="button" onClick={() => setShowScanner(true)}>
                    <Icon src="assets/white-scan-icon.svg" alt="scan-icon" ></Icon>
                    Scan Barcode
                    </ShowScannerBtn>
            )}

            <BottomBar />

        </Section>

    )


}