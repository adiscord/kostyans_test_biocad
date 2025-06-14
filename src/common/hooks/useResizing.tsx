import { useEffect, useState } from "react";

export const useResizing = () => {
  let [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
  return width;
};
