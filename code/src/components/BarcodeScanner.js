import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga';
import styled from 'styled-components';

const Camera = styled.div`
  width: 100%;
  height: 250px;
  max-width: 500px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.4);
  border-radius: 10px;
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
          readers: ['ean_reader'],
          multiple: false
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
