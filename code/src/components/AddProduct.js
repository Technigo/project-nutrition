import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'


const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 668px) {
  flex-direction: row;
}
`

const EntryContainer = styled.div`
 box-shadow: 3px 3px #fcdfa2;  

 @media (min-width: 668px) {
  display: flex;
  flex-direction: row;
}

`

const Input = styled.input`
  font-size: 16px;
  border: none;
  background: #fffaf0;
  width: 125px;
  padding: 8.5px 3px 8px 3px;
`
const Select = styled.select`
    font-size: 16px;
    padding: 8px 3px 8px 3px;
    background: #fffaf0;
    border: none;
    border-radius: 0;
`

const AddButton = styled.button`
  color: black;
  font-size: 16px;
  width: 60px;
  height: 60px;
  background-color: #fffaf0;
  padding: 10px;
  margin: 16px;
  border-radius: 50%;
  border: 0;
  box-shadow: 3px 3px #fcdfa2;
  cursor: pointer;
  transition: 0.2s;

  &: active {
    box-shadow: none;
  }
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
            <EntryContainer>
            <Select required onChange={(e) => setShelf(e.target.value)} value={shelf}>
                <option value="">Pick shelf</option>
                {shelves.map((shelf) => {
                    return <option value={shelf.name}>{shelf.name}</option>
                })}
            </Select>
            <Input type="text" value={barcode} required onChange={(e) => setBarcode(e.target.value)}></Input>
            </EntryContainer>
            <AddButton type="submit">Add<br/>item</ AddButton>
        </Container>
    )
}