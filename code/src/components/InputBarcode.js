import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components'

export const InputBarcode = () => {
    const [barcode, setBarcode] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchProduct(barcode))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    className="text-input" 
                    type="text" 
                    value={barcode} 
                    onChange={(event) => setBarcode(event.target.value)}/>
            </label>
                 <Button 
                 type="submit"
                 disabled={barcode.length < 1}
                 >Search barcode</Button>
        </form> 
    )
}

const Button = styled.button`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 50px;
padding: 5px 10px;
margin: 10px 0px;
background: #366e00;
border: none;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
font-family: 'Nunito', sans-serif;
color: white;
`