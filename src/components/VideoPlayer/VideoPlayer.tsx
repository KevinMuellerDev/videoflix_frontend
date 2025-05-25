import { useEffect, useRef } from 'react';
import { useToast } from '@/context/ToastContext';
import videojs from 'video.js';

interface VideoPlayerProps {
  src: string | null;
}

/**
 * React component that renders a Video.js player with HLS support.
 *
 * Initializes the player when a source is provided, enables quality selection,
 * and displays toast notifications when the user changes the video quality.
 * Also handles responsive resizing and cleans up the player on unmount.
 *
 * @param {string | null} src - The video source URL (must be HLS-compatible, e.g. .m3u8).
 */
const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (!src) return;

    /**
     * Initializes the Video.js player on the referenced video element with HLS support,
     * sets up the quality selector plugin to display the current quality,
     * and listens for user-initiated quality changes to show a toast notification
     * with the selected video resolution and bitrate. Ignores the initial automatic change event.
     */
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
              type: 'application/x-mpegURL',
            },
          ],
        });

        playerRef.current.ready(() => {
          playerRef.current?.hlsQualitySelector?.({
            displayCurrentQuality: true,
          });

          const qualityLevels = playerRef.current.qualityLevels();

          let changeEventCount = 0;

          qualityLevels.on('change', () => {
            changeEventCount++;
            if (changeEventCount === 1) {
              return;
            }

            const activeLevel = Array.from({ length: qualityLevels.length })
              .map((_, i) => qualityLevels[i])
              .find((level) => level.enabled);

            if (activeLevel) {
              showToast(
                `🎞️ Aktive Qualität: ${activeLevel.height}p - ${Math.round(
                  activeLevel.bitrate / 1000
                )} kbps`
              );
            } else {
              showToast('⚠️ Keine aktive Qualität gefunden.');
            }
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
