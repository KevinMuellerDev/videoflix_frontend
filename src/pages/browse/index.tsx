import Head from 'next/head';
import React from 'react';
import mainStyles from '@/pages/index.module.css';
import styles from '@/pages/browse/index.module.css';
import PreviewAction from '@/components/Browse/PreviewAction/PreviewAction';
import ContentContainer from '@/components/Browse/ContentContainer/ContentContainer';

const Browse: React.FC = () => {
  const description =
    'In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.';
  const testData = [
    {
      id: 1,
      created_at: '2025-04-25 10:45:21.766693',
      title: 'Titel1',
      description:
        'In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.',
      video_file: '/268290_tiny.mp4',
      genre: 'Action',
      screenshot: '/dummypreview.png',
      trailer: '/268290_tiny.mp4',
    },
    {
      id: 2,
      created_at: '2025-04-24 10:45:21.766693',
      title: 'Titel2',
      description:
        'In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.',
      video_file: '/268290_tiny.mp4',
      genre: 'Documentary',
      screenshot: '/dummypreview.png',
      trailer: '/268290_tiny.mp4',
    },
    {
      id: 3,
      created_at: '2025-04-23 10:45:21.766693',
      title: 'Titel3',
      description:
        'In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.',
      video_file: '/268290_tiny.mp4',
      genre: 'Documentary',
      screenshot: '/dummypreview.png',
      trailer: '/268290_tiny.mp4',
    },
  ];

  const uniqueGenres = [...new Set(testData.map((video) => video.genre))];

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
          <PreviewAction
            title="Breakout"
            description={description}
            trailer={'/268290_tiny.mp4'}
          />
        </div>
        <div className={styles.contentContainer}>
          {uniqueGenres.map((genre) => (
            <ContentContainer key={genre} genre={genre} data={testData} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Browse;
