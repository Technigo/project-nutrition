import React, { useRef, useState, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Loader from 'react-loader-spinner'

//STYLED COMPONENTS
const Scan = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 6px;
  overflow: hidden;
`

// COMPONENT BARCODESCANNER (SET UP BY TECHNIGO TEAM)
export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()
  const hasResult = useRef(false)

  // Function to not scan product twice
  Quagga.onDetected((data) => {
    if (!hasResult.current) {
      onDetected(data.codeResult.code)
    }

    hasResult.current = true

    // Debounce function to not scan more than once in 500ms
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
        target: cameraDivRef.current,
        constraints: {
          width: 300,
          height: 200,
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
    <>
      {initializing && <Loader type="ThreeDots" color="#333" height={80} width={80} />}
      <Scan ref={cameraDivRef} className={className} />
    </>
  )
}
