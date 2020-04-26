import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";
import styled from "styled-components"

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
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
    <Wrapper>
      {initializing && <div>Starting camera...</div>}
      <div ref={cameraDivRef} className={className} />
    </Wrapper>
  );
};

 const Wrapper = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: auto;
 `
 