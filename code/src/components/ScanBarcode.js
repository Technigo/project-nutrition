import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
// import { barcodes } from 'reducers/barcodes'

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 1px solid black;
padding: 30px;
`

const Scanner = styled.div`
border: 1px solid black;
width: 300px;
height: 300px;
/* align-content: center;
justify-content: center; */
`

const ShowScannerBtn = styled.button`
border: 1px solid black;
background-color: white;
width: 60px;
height: 60px;
border-radius: 50%;
position: relative;
top: 40%;
left: 40%
/* align-self: center;
justify-self: center; */
`

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()



    return (
        <Section>
            <Scanner>
                {!showScanner && (
                    <ShowScannerBtn type="button" onClick={() => setShowScanner(true)}>
                        Show scanner
                </ShowScannerBtn>
                )}

                {showScanner && (
                    <BarcodeScanner onDetected={(code) => {
                        console.log('Got barcode', code)
                        dispatch(fetchBarcodes(code))
                        setShowScanner(false)
                    }} />
                )}
            </Scanner>
        </Section>

    )


}