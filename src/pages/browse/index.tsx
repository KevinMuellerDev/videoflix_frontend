import Head from 'next/head';
import React from 'react';
import mainStyles from '@/pages/index.module.css';

const Browse = () => {
  return (
    <>
      <Head>
        <title>Videoflix | Browse</title>
      </Head>
      <main className={mainStyles.browseContent}>
        <div className="preview"></div>
      </main>
    </>
  );
};

export default Browse;
