import React, { useRef, useState, useLayoutEffect } from 'react'
import Quagga from 'quagga'
import "./barcodeScanner.css"


export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()
  const hasResult = useRef(false)
  //We want it to check if it already has a code. No double scans

  const handler = data => {
    console.log("found")
    if (!hasResult.current) {
      onDetected(data.codeResult.code)
    }

    hasResult.current = true

    setTimeout(() => {
      hasResult.current = false
    }, 500)
  }



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
      Quagga.onDetected(handler)
    })

    return () => {
      Quagga.stop()
      Quagga.offDetected(handler)
    }
  }, [])

  return (
    <>
      {initializing && <div>Starting camera...</div>}
      <div ref={cameraDivRef} className={className} />
    </>
  )
}