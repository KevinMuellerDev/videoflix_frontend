import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import styles from '@/components/VideoPlayer/VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

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
            type: 'application/x-mpegURL',
          },
        ],
      });

      playerRef.current.ready(() => {
        playerRef.current?.hlsQualitySelector({
          displayCurrentQuality: true,
        });

      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = undefined;
      }
    };
  }, [src]);

  useEffect(() => {
    const handleResize = () => {
      playerRef.current?.width(window.innerWidth);
      playerRef.current?.height(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div data-vjs-player className={styles.videoContainer}>
      <video ref={videoRef} className="video-js vjs-play-centered" />
    </div>
  );
};

export default VideoPlayer;
