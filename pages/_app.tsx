import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DndContext } from '@dnd-kit/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
