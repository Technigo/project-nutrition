import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'


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
        <form onSubmit={(e) => handleSubmit(e)}>
            <button type="submit">Add shelf</button>
            <input value={shelfName} type="text" onChange={(e) => setShelfName(e.target.value)}></input>
        </form>
    )

}
