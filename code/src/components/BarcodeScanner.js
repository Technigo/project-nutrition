import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";
import { Loading } from './Loading'
import styled from 'styled-components'
import 'index.css'

const CameraContainer = styled.div`
display: flex;
flex-direction:column;
justify-content:center;

`
const Instruction = styled.p`
    font-size:23px;
    font-weigth:bold;
    margin-top:-530px;
    color:#004445;
    @media (max-width: 375px){
      font-size:32px;
      text-align:center;
    }
`
const InstructionTextContainer = styled.div`

`

export const BarcodeScanner = ({ className, onDetected }) => {

  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code);
  })

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err)
          return
        }
        Quagga.start()
        setInitializing(false)
      }
    )

    return () => {
      Quagga.stop()
    }
  }, []);

  return (
    <>
      <CameraContainer>
        {initializing && <div><Loading /></div>}
        <div ref={cameraDivRef} className={className} />
        <InstructionTextContainer>
          <Instruction>SCAN THE BARCODE TO LOOK FOR ALLERGENS</Instruction>
        </InstructionTextContainer>
      </CameraContainer>
    </>
  )
}
