import React from 'react';
import styles from '@/components/Browse/ContentContainer/ContentContainer.module.css';

const ContentContainer = ({ genre }: { genre: string }) => {
  const dummyVid = [
    { id: 1, title: 'Action', background: '#FF5733' },
    { id: 2, title: 'Action', background: '#FF5733' },
    { id: 3, title: 'Comedy', background: '#33FF57' },
    { id: 4, title: 'Drama', background: '#3357FF' },
    { id: 5, title: 'Sci-Fi', background: '#FF33A1' },
    { id: 6, title: 'Horror', background: '#000000' },
  ];

  return (
    <div className={styles.contentContainer}>
      <span className={styles.genre}>{genre}</span>
      <div className={styles.vidWrapper}>
        {dummyVid.map((vid) => (
          <div
            className={styles.dummyVid}
            key={vid.id}
            style={{ background: vid.background }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;
