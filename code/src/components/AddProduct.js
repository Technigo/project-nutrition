import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'

const Container = styled.form`
 box-shadow: 3px 3px #fcdfa2;  
`
const AddButton = styled.button`
  border: none;
  background: transparent;
`

const Input = styled.input`
  font-size: 16px;
  border: none;
  background: #fffaf0;
  width: 125px;
  padding: 8.7px 3px 8px 3px;
`
const Select = styled.select`
    font-size: 16px;
    padding: 8px 3px 8px 3px;
    background: #fffaf0;
    border: none;
    border-radius: 0;
`

export const AddProduct = ({ barcode, setShelf, setBarcode, shelf }) => {
    const shelves = useSelector((state) => state.nutrition.list.shelves)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(barcode, shelf)
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((data) => data.json())
            .then((json) => {
                if (json.product) {
                    if (json.product.product_name) {
                        dispatch(
                            nutrition.actions.addProduct({ newProduct: json, shelf: shelf })
                        )
                        setShelf('')
                        setBarcode('')
                    } else { console.log('no product name') }

                } else { console.log('no product') }
            });
    };


    return (
        <Container onSubmit={(e) => handleSubmit(e)}>
            <Select required onChange={(e) => setShelf(e.target.value)} value={shelf}>
                <option value="">Pick shelf</option>
                {shelves.map((shelf) => {
                    return <option value={shelf.name}>{shelf.name}</option>
                })}
            </Select>
            <Input type="text" value={barcode} required onChange={(e) => setBarcode(e.target.value)}></Input>
        </Container>
    )
}