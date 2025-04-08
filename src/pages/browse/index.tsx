import Head from 'next/head';
import React from 'react';
import mainStyles from '@/pages/index.module.css';
import styles from '@/pages/browse/index.module.css';
import PreviewAction from '@/components/Browse/PreviewAction/PreviewAction';

const Browse: React.FC = () => {
  const description =
    'In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.';
  return (
    <>
      <Head>
        <title>Videoflix | Browse</title>
      </Head>
      <main className={mainStyles.browseContent}>
        <div className={styles.preview}>
          <img
            className={styles.previewContent}
            src="/dummypreview.png"
            alt="preview"
          />
          <PreviewAction title="Breakout" description={description} />
        </div>
      </main>
    </>
  );
};

export default Browse;
