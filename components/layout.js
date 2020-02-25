import React from "react";
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'
import { CSSReset } from "@chakra-ui/core"
import fetch from 'node-fetch'

import { ThemeProvider } from "@chakra-ui/core";
import styles from "./Layout.module.css"

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  link: createHttpLink({
    uri: "https://gatsby.raxo.dev/graphql",
    fetch: fetch,
  }),
});

const Layout = props => (
  <div className={styles.Layout} id={'layout__wrapper'}>
    <ApolloProvider client={client}>
      <Head key={'layout-head'}>
        <link 
          href="https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap" 
          rel="stylesheet" 
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <CSSReset />
        {props.children}
      </ThemeProvider>
    </ApolloProvider>
  </div>
);


export default Layout