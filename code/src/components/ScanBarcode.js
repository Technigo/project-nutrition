import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
// import { barcodes } from 'reducers/barcodes'
import styled from 'styled-components'

const ShowScannerBtn = styled.button`
border: 1px solid black;
background-color: white;
`

export const ScanBarcode = () => {

    const [showScanner, setShowScanner] = useState(false)

    return (
        <>
            {!showScanner && (
                <ShowScannerBtn type="button" onClick={() => setShowScanner(true)}>
                    Show scanner
                </ShowScannerBtn>
            )}

            {showScanner && (
                <BarcodeScanner onDetected={(code) => {
                    console.log('Got barcode', code)

                    setShowScanner(false)
                }} />
            )}
        </>
    )


}