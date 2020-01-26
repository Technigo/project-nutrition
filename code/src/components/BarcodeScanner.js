import React, { useRef, useState, useLayoutEffect } from 'react';
import Quagga from 'quagga';
import styled from 'styled-components';

const Camera = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    /* width: 100%; */
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.4);

    @media screen and (min-width: 768px) {
      height: 100%;
    }
  }

  canvas {
    height: 0;
    border: 0;
  }
`;

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();
  const hasResult = useRef(false);

  Quagga.onDetected(data => {
    if (!hasResult.current) {
      onDetected(data.codeResult.code);
    }

    hasResult.current = true;

    setTimeout(() => {
      hasResult.current = false;
    }, 500);
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
