import React, { useRef, useState, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Loader from 'react-loader-spinner'

//STYLED COMPONENTS
// const ScanWrapper = styled.div`
// `
const Scan = styled.div`
  height: 250px;
  width: 400px;
  border-radius: 6px;
  overflow: hidden;
`

// COMPONENT BARCODESCANNER (SET UP BY TECHNIGO TEAM)
export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()


  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code)
  })

  useLayoutEffect(() => {

    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: cameraDivRef.current,
        constraints: {
          width: 400,
          height: 250,
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
