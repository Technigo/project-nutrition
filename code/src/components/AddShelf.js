import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'

const ShelfForm = styled.form`
  background: #fffaf0;
  border: none;
  width: 240px;
  height: 36px;
  box-shadow: 3px 3px #fcdfa2;
  margin-bottom: 91px;

  @media (min-width: 668px) {
    margin-bottom: 0;
  }
`
const AddButton = styled.button`
  border: none;
  background: #fffaf0;
  font-size: 16px;
  height: 36px;
  padding: 8.5px 0 8px 6px;
  cursor: pointer;
`

const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  width: 130px;
`

export const AddShelf = ({ setShowAddShelf }) => {
    const [shelfName, setShelfName] = useState()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(nutrition.actions.addShelf({ newShelf: { name: shelfName, reveal: false, products: [] } }))
        setShelfName('')
        setShowAddShelf(false)
    }

    return (
        <ShelfForm onSubmit={(e) => handleSubmit(e)}>
            <AddButton type="submit">Add shelf</AddButton>
            <Input value={shelfName} type="text" required onChange={(e) => setShelfName(e.target.value)}></Input>
        </ShelfForm>
    )

}
