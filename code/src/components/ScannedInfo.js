import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../reducers/data'
import { Card } from '../lib/Card'
import styled from 'styled-components/macro'


export const ScannedInfo = () => {
  const scannedItem = useSelector((state) => state.data.item)
  
  return (
  <>
      {scannedItem.product && scannedItem.status === 1 && (
        <Card>
        <Text>
          <p>Product: {scannedItem.product.product_name}</p>
          <p>Origin: {scannedItem.product.origins}</p>
        </Text>
      </Card>
    )
    } 
    </>  
  )
} 

const Text = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  `
