import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";
import styled from 'styled-components';

const Section = styled.section` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 90vh;

  div{
    width: 50%;
    margin: auto;
  }
`

const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const [product, setProduct] = useState("")
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    // OLD VERSION
    // onDetected(data.code);

    // New version
    onDetected(data.codeResult.code);
  });

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
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <>
      {initializing && <div>Starting camera...</div>}
      <Section>
        <div ref={cameraDivRef} className={className} />
      </Section>
    </>

  );
};
