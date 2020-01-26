import React from "react";
import { useSelector } from "react-redux";
import { IoIosSearch, IoMdBarcode } from 'react-icons/io'
import styled from 'styled-components/macro'

const Start = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StartTitle = styled.h1`
    margin-top: 50px;
`

const Intro = styled.span`
    padding: 16px;
`

export const StartPage = () => {
    const showScanner = useSelector(state => state.ui.showScanner);
    const product = useSelector(state => state.products.product);
    const isLoading = useSelector(state => state.ui.isLoading);

    return (
        <>
            {!showScanner && !product.product && !isLoading && (
                <Start>
                    <StartTitle>Welcome to Open Food Data!</StartTitle>

                    <Intro>
                        <p>Open Food Facts is a food products database made by everyone, for everyone.</p>

                        You can use it to make better food choices, and as it is open data, anyone can re-use it for any purpose.
                    </Intro>

                    <p>Click <IoMdBarcode size="24px" color="#3061fc" /> to scan a barcode.</p>
                    <p>Or click  <IoIosSearch size="24px" color="#3061fc" /> to insert a barcode manually.</p>
                </Start>
            )}
        </>
    )
}