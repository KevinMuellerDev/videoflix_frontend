import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';

const VideoPage = ({ videoUrl }: { videoUrl: string }) => {
  videoUrl =
    'http://127.0.0.1:8000/media/videos/167404-836755033_small_hls/master.m3u8'; // Pfad zu deiner generierten HLS-Datei

  return (
    <div>
      <VideoPlayer src={videoUrl} />
    </div>
  );
};

export default VideoPage;
