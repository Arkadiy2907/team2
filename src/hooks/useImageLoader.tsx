import React, { useEffect } from 'react';

export const useImageLoader = (src: string): boolean => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading;
};
