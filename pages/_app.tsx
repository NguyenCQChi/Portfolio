import '@styles/style.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page)
    
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
