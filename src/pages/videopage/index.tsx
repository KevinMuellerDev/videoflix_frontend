import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const VideoPage = () => {
  // const videoUrl =
  //   'http://127.0.0.1:8000/media/videos/167404-836755033_small_hls/master.m3u8'; // Pfad zu deiner generierten HLS-Datei
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  console.log(videoUrl);

  useEffect(() => {
    if (router.isReady) {
      const src = router.query.src;
      if (typeof src === 'string') {
        setVideoUrl(src);
      }
    }
  }, [router.isReady]);

  return (
    <div>
      {videoUrl ? <VideoPlayer src={videoUrl} /> : <p>Loading video...</p>}
    </div>
  );
};

export default VideoPage;
