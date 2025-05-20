import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/Browse/ContentContainer/ContentContainer.module.css';

interface VideoData {
  id: number;
  created_at: string;
  title: string;
  description: string;
  video_file: string;
  genre: string;
  screenshot: string;
  trailer: string;
}

interface ContentContainerProps {
  data: VideoData[];
  genre: string;
}

/**
 * `ContentContainer` renders a list of video previews filtered by genre.
 * On hover, the preview image is replaced with an autoplaying muted video.
 * Clicking on a video redirects the user to a dedicated video page.
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {VideoData[]} props.data - Array of video objects containing metadata
 * @param {string} props.genre - The genre used to filter the videos
 *
 * @returns {JSX.Element} A styled grid of video previews for the specified genre
 *
 * @example
 * <ContentContainer data={videoList} genre="Action" />
 */
const ContentContainer = ({ data, genre }: ContentContainerProps) => {
  const filteredVideos = data.filter((video) => video.genre === genre);
  const router = useRouter();

  const redirectToVideo = (url: string) => {
    router.push(`/videopage?src=${url}`);
  };

  return (
    <div className={styles.contentContainer}>
      <span className={styles.genre}>{genre}</span>
      <div className={styles.vidWrapper}>
        {filteredVideos.map((vid) => (
          <div
            className={styles.dummyVid}
            key={vid.id}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) {
                video.currentTime = 0;
                video.style.opacity = '1';
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) {
                video.pause();
                video.style.opacity = '0';
              }
            }}
            onClick={() => redirectToVideo(vid.video_file)}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {/* Hintergrundbild */}
            <img
              src={vid.screenshot}
              alt={vid.title}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Video-Element */}
            <video
              src={vid.video_file}
              muted
              loop
              className={styles.hoverVideo}
            />
            {vid.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;
