import React, { useEffect } from "react";

interface IBackground {
  background: string;
}

const useBackground = ({ background }: IBackground) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      `url('${background}')`
    );
    return () => {
      document.documentElement.style.setProperty("--background", "none");
    };
  }, [background]);
};

export default useBackground;
