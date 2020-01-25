import React, { useRef, useState, useLayoutEffect } from 'react'
import Quagga from 'quagga'
import styled from 'styled-components/macro'
import { AiOutlineBarcode } from "react-icons/ai";

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()
  const hasResult = useRef(false)

  Quagga.onDetected((data) => {
    if (!hasResult.current) {
      onDetected(data.codeResult.code)
    }

    hasResult.current = true

    setTimeout(() => {
      hasResult.current = false
    }, 500)
  })

  useLayoutEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: cameraDivRef.current,
        constraints: {
          width: 400,
          height: 300,
          facingMode: 'environment'
        }
      },
      decoder: {
        readers: ['ean_reader']
      }
    }, (err) => {
      if (err) {
        console.error('Failed to initialize reader', err)
        return
      }
      Quagga.start()
      setInitializing(false)
    })

    return () => {
      Quagga.stop()
    }
  }, [])

  return (
    <Scanner>
      {initializing &&
        <LoadingIcon>
          <AiOutlineBarcode
            size={100}
          />
        </LoadingIcon>}
      <Video ref={cameraDivRef} />
    </Scanner>
  )
}

const Scanner = styled.div`
`
const Video = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 6px;
  overflow: hidden;
  `

const LoadingIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
`

