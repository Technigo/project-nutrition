import React from 'react';
import { useSelector } from 'react-redux';
import { ScanBarcode } from 'components/ScanBarcode';
import { ScanInfo } from 'components/ScanInfo';
import { ShowInfo } from 'components/ShowInfo';
import { Footer } from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyle';

export const ScanApp = () => {
  const showScanner = useSelector(state => state.scanner.showScanner);

  return (
    <>
      <GlobalStyle />
      <ScanInfo />
      <ScanBarcode />
      {!showScanner && <ShowInfo />}
      <Footer />
    </>
  );
};
