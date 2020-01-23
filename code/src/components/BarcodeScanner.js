import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga';
import styled from 'styled-components';

const Camera = styled.div`
  width: 100%;
  height: 470px;
  max-width: 600px;
  /* border: 1px solid red; */
  border-radius: 8px;
  box-shadow: 0 3px 5px 0 rgba(14, 30, 37, 0.4);
  border: 2px solid rgba(14, 30, 37, 0.8);
  overflow: hidden;
`;

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected(data => {
    onDetected(data.codeResult.code);
  });

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: cameraDivRef.current,
          constraints: {
            width: 640,
            height: 480
          }
        },
        decoder: {
          readers: ['ean_reader']
        }
      },
      err => {
        if (err) {
          console.error('Failed to initialize reader', err);
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
      <Camera ref={cameraDivRef} className={className} />
    </>
  );
};
