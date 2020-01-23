import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga';
import styled from 'styled-components';

const Camera = styled.div`
  width: 320px;
  height: 240px;
  border: 2px solid red;
  border-radius: 4px;
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
            width: 320,
            height: 240
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
