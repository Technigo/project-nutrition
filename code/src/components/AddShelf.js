import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'

const ShelfForm = styled.form`
  background: transparent;
  border: none;
`
const AddButton = styled.button`
  border: none;
  background: transparent;
`

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid black;

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
