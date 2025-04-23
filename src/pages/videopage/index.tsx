import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import styles from '@/components/VideoPlayer/VideoPlayer.module.css';

const VideoPage = ({ videoUrl }: { videoUrl: string }) => {
  videoUrl = '/268290_tiny.mp4'; // Pfad zu deiner generierten HLS-Datei

  return (
    <div style={{ width: '100%' }}>
      <VideoPlayer src={videoUrl} />
    </div>
  );
};

export default VideoPage;
