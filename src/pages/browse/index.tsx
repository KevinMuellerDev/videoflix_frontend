import Head from 'next/head';
import React from 'react';
import mainStyles from '@/pages/index.module.css';
import styles from '@/pages/browse/index.module.css';
import PreviewAction from '@/components/Browse/PreviewAction/PreviewAction';
import ContentContainer from '@/components/Browse/ContentContainer/ContentContainer';
import { useFetch } from '@/lib/useApi';

const Browse: React.FC = () => {
  type Video = {
    id: number;
    created_at: string;
    description: string;
    genre: string;
    screenshot: string;
    title: string;
    trailer: string;
    video_file: string;
  };

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

  const videos: Video[] | null = useFetch('http://127.0.0.1:8000/api/videos/');
  console.log(videos);

  const uniqueGenres =
    videos !== null ? [...new Set(videos.map((video) => video.genre))] : null;

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
          {uniqueGenres &&
            videos !== null &&
            uniqueGenres.map((genre) => (
              <ContentContainer key={genre} genre={genre} data={videos} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Browse;
