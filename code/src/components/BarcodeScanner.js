import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga'; //Access to webcam
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

        <div ref={cameraDivRef} className={className} />
      </ScannerContainer>
    </>
  );
};
