import Head from 'next/head'
import Layout from "../components/layout";
import React, { Component } from 'react';
import theme from '../theme';

class AboutPage extends Component {
  render () {
  return (
    <>
      <Layout>
        <Head>
          <title>Home Rental Company | About Us | FirstKey Homes</title>
        </Head>
      </Layout>
      <style jsx>{`
      `}</style>
    </>
  )
}
}

export default AboutPage
