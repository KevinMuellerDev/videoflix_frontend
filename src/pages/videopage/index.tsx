import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/pages/videopage/index.module.css';
import Head from 'next/head';

/**
 * Next.js page that renders a video player for the given video source URL.
 *
 * - Extracts the `src` query parameter from the router and passes it to the VideoPlayer component.
 * - Provides a back navigation to the /browse page via a clickable arrow icon.
 * - Displays a loading message until the video URL is available.
 *
 * URL Parameter:
 * @query {string} src - The URL of the video to be played (e.g., HLS `.m3u8` stream).
 *
 * @returns {JSX.Element} The video player page.
 */
const VideoPage = () => {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const src = router.query.src;
      if (typeof src === 'string') {
        setVideoUrl(src);
      }
    }
  }, [router.isReady]);

  const redirectToBrowse = () => {
    router.push('/browse');
  };

  return (
    <>
      <Head>
        <title>Videoflix | Streaming </title>
      </Head>
      <div className={styles.background}>
        <img
          src="/icons/arrow-left.png"
          alt="return to browse"
          className={styles.returnArrow}
          onClick={redirectToBrowse}
        />

        {videoUrl ? (
          <VideoPlayer src={videoUrl} />
        ) : (
          <p className="loader">Loading video...</p>
        )}
      </div>
    </>
  );
};

export default VideoPage;
