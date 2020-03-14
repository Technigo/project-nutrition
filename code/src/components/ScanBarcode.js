import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from '../reducers/products'
import { useDispatch } from 'react-redux'
import '../index.css'

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()


    return (
        <>
            {!showScanner && (
                <>
                    <form className="mainForm">
                        <button className="buttonScanner" type="button" onClick={() =>
                            setShowScanner(true)
                        }>
                            Show scanner
                        </button>
                    </form>
                </>
            )
            }

            {
                showScanner && (
                    <BarcodeScanner onDetected={(code) => {
                        console.log('Got barcode', code)
                        setShowScanner(false)
                        dispatch(fetchProduct(code))
                    }} />
                )
            }
        </>
    )
}