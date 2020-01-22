import React, { useRef, useState, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import Quagga from 'quagga'

// BarcodeScanner is set up by Technigo
export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()


  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code)
  })

  useLayoutEffect(() => {
    const camWidth = window.innerWidth / 2
    const camHeight = window.innerHeight / 1.7

    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: cameraDivRef.current,
        constraints: {
          width: camWidth,
          height: camHeight,
          facingMode: 'user'
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
    <ScanWrapper>
      {initializing && <LoadText>Starting camera...</LoadText>}
      <Scan ref={cameraDivRef} className={className} />
    </ScanWrapper>
  )
}
const ScanWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const LoadText = styled.p`
  font-size: 16px;
  color: #fff;
`
const Scan = styled.div`

`
