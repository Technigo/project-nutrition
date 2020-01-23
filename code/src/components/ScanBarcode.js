import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
// import { barcodes } from 'reducers/barcodes'

const ShowScannerBtn = styled.button`
border: 1px solid black;
background-color: white;
`

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()



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
                    dispatch(fetchBarcodes(code))
                    setShowScanner(false)
                }} />
            )}
        </>
    )


}