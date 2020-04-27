import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import {productStore, fetchData} from '../reducers/productStore'
import styled from 'styled-components'

const Button = styled.button`
  background-color: darkorange;
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-weight: bold;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: orange;
    color: black;
  }
`

export const ScanBarcode = () => {
  const cameraOn = useSelector((state)=>state.productStore.camera)
	const dispatch = useDispatch();

  const onDetected = (code) => {
		 console.log(`Code: ${code}`);
    dispatch(fetchData(code))
	};

  return (
    <>
      {!cameraOn && (
        <Button onClick={() => dispatch(productStore.actions.startCamera())}>
        Show scanner
        </Button>
      )}

      {cameraOn && (
        <>
        <Button onClick={() => dispatch(productStore.actions.stopCamera())}>
          Stop scanner
        </Button>
        <BarcodeScanner onDetected={(code) => {
          onDetected(code)
        }} />
  
        </>
      )}
    </>
  )
}