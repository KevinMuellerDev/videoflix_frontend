import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/pages/videopage/index.module.css';

const VideoPage = () => {
  // const videoUrl =
  //   'http://127.0.0.1:8000/media/videos/167404-836755033_small_hls/master.m3u8'; // Pfad zu deiner generierten HLS-Datei
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
  );
};

export default VideoPage;
