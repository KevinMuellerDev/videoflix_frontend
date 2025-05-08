import React, { useEffect } from 'react';

interface IBackground {
  background: string;
}

/**
 * The useBackground function sets the background of the document element to the specified URL and
 * removes it when the component unmounts.
 * @param {IBackground}  - `useBackground` takes an object as a parameter with a property
 * `background` of type `IBackground` which represents following object: `{background: string;}`.
 */
const useBackground = ({ background }: IBackground) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background',
      `url('${background}')`
    );
    return () => {
      document.documentElement.style.setProperty('--background', 'none');
    };
  }, [background]);
};

export default useBackground;
