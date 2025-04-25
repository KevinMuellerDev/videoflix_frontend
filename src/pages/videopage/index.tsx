import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import styles from '@/components/VideoPlayer/VideoPlayer.module.css';

const VideoPage = ({ videoUrl }: { videoUrl: string }) => {
  videoUrl = 'http://127.0.0.1:8000/media/videos/167404-836755033_small_hls/master.m3u8'; // Pfad zu deiner generierten HLS-Datei

  return (
    <div style={{ width: '100%' }}>
      <VideoPlayer src={videoUrl} />
    </div>
  );
};

export default VideoPage;
