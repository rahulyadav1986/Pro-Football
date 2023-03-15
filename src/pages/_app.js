import React, { Suspense } from 'react'
import {SessionProvider} from "next-auth/react";
import '@/styles/globals.scss'
import Layout from './layout'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>      
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
