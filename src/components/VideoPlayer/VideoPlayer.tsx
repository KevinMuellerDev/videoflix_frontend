import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import styles from '@/components/VideoPlayer/VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player | undefined>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        width: window.innerWidth,
        height: window.innerHeight,
        sources: [
          {
            src,
            type: 'video/mp4',
            // type: 'application/x-mpegURL', // <- HLS support
          },
        ],
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = undefined;
      }
    };
  }, [src]);

  return (
    <div data-vjs-player className={styles.videoContainer}>
      <video ref={videoRef} className="video-js vjs-play-centered" />
    </div>
  );
};

export default VideoPlayer;
