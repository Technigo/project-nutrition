import React, { useRef, useState, useLayoutEffect } from 'react'
import Quagga from 'quagga'
import { LoadingIndicator } from "./LoadingIndicator"
import "./barcodeScanner.css"

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()
  const hasResult = useRef(false)
  //We want it to check if it already has a code. No double scans

  // Function to handle whether barcode is found or not.
  // if not found - onDetected should run and hasResult
  // sets to true. After 500 milliseconds it sets to false anyway

  const handler = data => {
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
      //Quagga starts and detects after init with handler-function above
      Quagga.start()
      setInitializing(false)
      Quagga.onDetected(handler)

    })

    return () => {
      //Quagga stops (camera and such) and when the "onDetected event is no 
      //longer relevant, offDetected removes the given handler from the 
      //event-queue". So it can start fresh the next time, with no handlers
      //so that on init, one handler (instead of adding handlers)
      Quagga.stop()
      Quagga.offDetected(handler)
    }

  }, [])

  return (
    <>
      {initializing && <LoadingIndicator />}
      <div ref={cameraDivRef} className={className} />
    </>
  )
}
