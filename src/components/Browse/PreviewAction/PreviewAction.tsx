import React from 'react';
import styles from '@/components/Browse/PreviewAction/PreviewAction.module.css';

const PreviewAction = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const playVideo = () => {
    console.log(`Play ${title}`);
  };

  return (
    <div className={styles.actionWrapper}>
      <h1 className={styles.previewTitle}>{title}</h1>
      <span>{description}</span>
      <button className="vfBtn btnFix" onClick={playVideo}>
        <img src="/icons/play-arrow.png" />
        Play
      </button>
    </div>
  );
};

export default PreviewAction;
