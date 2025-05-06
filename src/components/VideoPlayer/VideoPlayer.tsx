import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import styles from '@/components/VideoPlayer/VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string | null;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!src) return;

    // Initialisierung verzögert, um sicherzustellen, dass das Video im DOM ist
    const setupPlayer = () => {
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
            },
          ],
        });

        playerRef.current.ready(() => {
          playerRef.current?.hlsQualitySelector?.({
            displayCurrentQuality: true,
          });
        });
      }
    };

    requestAnimationFrame(setupPlayer);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
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
    <div data-vjs-player>
      {src && (
        <video
          ref={videoRef}
          controls
          playsInline
          className="video-js vjs-play-centered"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
