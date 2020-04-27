import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { nutrition } from '../reducers/nutrition'
export const ProductDetails = () => {
    const [selectedItem, setSelectedItem] = useState()
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${params.product}.json`)
            .then((res) => res.json())
            .then((json) => {
                setSelectedItem(json.product)
            })
    }, [])



    return (
        <div>
            {!selectedItem && <p>loading...</p>}
            {selectedItem && <p>{selectedItem.product_name}</p>}
            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )

}