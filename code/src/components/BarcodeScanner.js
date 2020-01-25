import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";

import "./barcodescanner.css";
import styled from "styled-components";

const colors = [
  "#3e206d",
  "#916dd5",
  "#d89cf6",
  "#f0e3ff",
  "#c9b6e4",
  "#be9fe1"
];
const color = colors[Math.floor(Math.random() * colors.length)];
// setInterval(color, 1000);

const Background = styled.div`
  background: ${color};
`;

const Start = styled.div`
  background: black;
  height: 100px;
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weigth: bold;
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
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current
        },
        decoder: {
          readers: ["ean_reader"]
        }
      },
      err => {
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
      {initializing && <Start>Starting camera...</Start>}

      <Background ref={cameraDivRef} className={className} />
    </>
  );
};
