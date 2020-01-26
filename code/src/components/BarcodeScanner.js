import React, { useRef, useState, useLayoutEffect } from 'react'
import Quagga from 'quagga'
import './barcodeScanner.css'


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
        constraints: {
          width: 400,
          height: 400
        },
        target: cameraDivRef.current
      },
      decoder: {
        readers: ['ean_reader', 'ean_8_reader']
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
    <div className="scanner">
      <h3>Place barcode below</h3>
      {initializing && <div>Starting camera...</div>}
      <div ref={cameraDivRef} className={className} />
    </div>
  )
}
