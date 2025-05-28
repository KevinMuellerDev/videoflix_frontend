import React from 'react';
import styles from '@/components/Browse/PreviewAction/PreviewAction.module.css';
import { useRouter } from 'next/router';

/**
 * `PreviewAction` displays a preview section with a title, description,
 * and a button to play a trailer video. On click, the user is redirected
 * to the video page with the trailer source in the URL query.
 *
 * @component
 *
 * @param {Object} props - The component props
 * @param {string} props.title - The title of the preview content
 * @param {string} props.description - A short description of the content
 * @param {string} props.trailer - The URL or identifier of the trailer video
 *
 * @returns {JSX.Element} A styled section with preview information and a "Play" button
 *
 * @example
 * <PreviewAction
 *   title="Exciting Movie"
 *   description="Watch the thrilling new trailer."
 *   trailer="exciting-movie-trailer.mp4"
 * />
 */
const PreviewAction = ({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) => {
  const router = useRouter();
  const redirectToVideo = (url: string) => {
    router.push(`/videopage?src=${url}`);
  };

  return (
    <div className={styles.actionWrapper}>
      <h1 className={styles.previewTitle}>{title}</h1>
      <span>{description}</span>
      <button className="vfBtn btnFix" onClick={() => redirectToVideo(video)}>
        <img src="/icons/play-arrow.png" />
        Play
      </button>
    </div>
  );
};

export default PreviewAction;
