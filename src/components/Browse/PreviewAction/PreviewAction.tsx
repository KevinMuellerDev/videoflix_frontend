import React from 'react';
import styles from '@/components/Browse/PreviewAction/PreviewAction.module.css';
import { useRouter } from 'next/router';

const PreviewAction = ({
  title,
  description,
  trailer,
}: {
  title: string;
  description: string;
  trailer: string;
}) => {
  const router = useRouter();
  const redirectToVideo = (url: string) => {
    router.push(`/videopage?src=${url}`);
  };

  return (
    <div className={styles.actionWrapper}>
      <h1 className={styles.previewTitle}>{title}</h1>
      <span>{description}</span>
      <button className="vfBtn btnFix" onClick={() => redirectToVideo(trailer)}>
        <img src="/icons/play-arrow.png" />
        Play
      </button>
    </div>
  );
};

export default PreviewAction;
