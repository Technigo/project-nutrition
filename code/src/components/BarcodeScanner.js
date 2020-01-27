import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga'; //Access to webcam
import styled from 'styled-components';
import './barcodeScanner.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ScannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Camera = styled.div`
  background-image: url('../assets/scan-icon.png');
`;

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();
  const hasResult = useRef(false);

  Quagga.onDetected(data => {
    if (!hasResult.current) onDetected(data.codeResult.code);
  });

  hasResult.current = true;

  setTimeout(() => {
    hasResult.current = false;
  }, 500);

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: cameraDivRef.current
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
      <ScannerContainer>
        {initializing && (
          <Wrapper>
            <div>Starting camera...</div>
          </Wrapper>
        )}

        <Camera ref={cameraDivRef} className={className}></Camera>
      </ScannerContainer>
    </>
  );
};
