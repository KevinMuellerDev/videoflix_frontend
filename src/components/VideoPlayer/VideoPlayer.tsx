import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { useToast } from '@/context/ToastContext';

interface VideoPlayerProps {
  src: string | null;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [levels, setLevels] = useState<Hls.Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(-1);
  const { showToast } = useToast();

  useEffect(() => {
    if (!src) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;

      hls.loadSource(src);
      hls.attachMedia(videoRef.current!);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setLevels(hls.levels);
        setCurrentLevel(hls.currentLevel);
        videoRef.current?.play();
      });

      hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
        setCurrentLevel(data.level);
      });

      return () => {
        hls.destroy();
        hlsRef.current = null;
      };
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari Fallback
      videoRef.current.src = src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current?.play();
      });
    }
  }, [src]);

  const onQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = Number(e.target.value);
    if (hlsRef.current) {
      hlsRef.current.currentLevel = level;
      const label =
        level === -1 ? 'Auto' : `${hlsRef.current.levels[level].height}p`;
      showToast(`🎞 Qualität geändert: ${label}`);
    }
    setCurrentLevel(level);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <video
        ref={videoRef}
        controls
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          display: 'block',
        }}
      />
      {levels.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '16px', // ca. auf Höhe der Player Controls
            right: '16px', // anpassen für deine Controls / Lautstärke-Button
            zIndex: 10,
          }}
        >
          <select
            value={currentLevel}
            onChange={onQualityChange}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '0px solid transparent',
              padding: '4px 8px',
              fontSize: '14px',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <option value={-1}>Auto</option>
            {levels.map((level, i) => (
              <option key={i} value={i}>
                {level.height}p
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
