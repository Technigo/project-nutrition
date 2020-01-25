import React, { useRef, useState, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Loader from 'react-loader-spinner'

//STYLED COMPONENTS
const Scan = styled.div`
  width: 400px;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 449px) {
    width: 90vw;
    height: 220px;
  }
`

// COMPONENT BARCODESCANNER (SET UP BY TECHNIGO TEAM)
export const BarcodeScanner = ({ onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()
  const hasResult = useRef(false)

  // To prevent from scanning same product more than once within 500ms
  Quagga.onDetected(data => {
    if (!hasResult.current) {
      onDetected(data.codeResult.code)
    }

    hasResult.current = true

    setTimeout(() => {
      hasResult.current = false
    }, 500)
  })

  // Added constarints to set size on cam view
  useLayoutEffect(() => {

    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: cameraDivRef.current
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
    <>
      {initializing && <Loader type="ThreeDots" color="#333" height={80} width={80} />}
      <Scan ref={cameraDivRef} />
    </>
  )
}
