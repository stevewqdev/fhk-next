import Head from 'next/head'
import Layout from "../components/layout";
import React, { Component } from 'react';
import theme from '../theme';

class HomePage extends Component {
  render () {
  return (
    <>
      <Layout>
        <Head>
          <title>Houses For Rent | Find Your Next Rental Home | FirstKey Homes</title>
        </Head>
      </Layout>
      <style jsx>{`
      `}</style>
    </>
  )
}
}

export default HomePage
