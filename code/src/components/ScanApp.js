import React from 'react';
import { ScanBarcode } from 'components/ScanBarcode';
import { Header } from 'components/Header';
import { ShowInfo } from 'components/ShowInfo';
import { Footer } from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyle';

export const ScanApp = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ScanBarcode />
      <ShowInfo />
      <Footer />
    </>
  );
};
