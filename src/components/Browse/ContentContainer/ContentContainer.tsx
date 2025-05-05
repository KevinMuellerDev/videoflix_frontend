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

const ContentContainer = ({ data, genre }: ContentContainerProps) => {
  const filteredVideos = data.filter((video) => video.genre === genre);
  const router = useRouter();

  const dummyVid = [
    { id: 1, title: 'Action', background: '#FF5733' },
    { id: 2, title: 'Action', background: '#FF5733' },
    { id: 3, title: 'Comedy', background: '#33FF57' },
    { id: 4, title: 'Drama', background: '#3357FF' },
    { id: 5, title: 'Sci-Fi', background: '#FF33A1' },
    { id: 6, title: 'Horror', background: '#000000' },
  ];

  const redirectToVideo = (url: string) => {
    router.push(`/videopage?src=${url}`);
    return;
  };

  return (
    <div className={styles.contentContainer}>
      <span className={styles.genre}>{genre}</span>
      <div className={styles.vidWrapper}>
        {filteredVideos.map((vid) => (
          <div
            className={styles.dummyVid}
            key={vid.id}
            style={{ backgroundImage: `url(${vid.screenshot})` }}
            onClick={() => redirectToVideo(vid.video_file)}
          >
            {vid.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;
