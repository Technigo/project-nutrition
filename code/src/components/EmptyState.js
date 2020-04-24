import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { SetData } from './SetData';

export const EmptyState = () => {
    const [showScanner, setShowScanner] = useState(false)

    return (
        <>
            <h2>No Products to display</h2>
            {showScanner && <SetData />}
            <button onClick={() => setShowScanner(!showScanner)}>Scan Items</button>

        </>
    )
}