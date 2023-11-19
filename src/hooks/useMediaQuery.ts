import { useEffect, useState } from 'react';

import screenConfig from '../screen.config';

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState({
    isMobile: false,
    isSmallTabletAndSmaller: false,
    isLargeTabletAndSmaller: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setMediaQuery({
        isMobile: document.body.clientWidth <= screenConfig.sm,
        isSmallTabletAndSmaller: document.body.clientWidth <= screenConfig.md,
        isLargeTabletAndSmaller: document.body.clientWidth <= screenConfig.lg,
        isDesktop: document.body.clientWidth > screenConfig.lg,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: mediaQuery.isMobile,
    isSmallTabletAndSmaller: mediaQuery.isSmallTabletAndSmaller,
    isSmallTablet: mediaQuery.isSmallTabletAndSmaller && !mediaQuery.isMobile,
    isLargeTabletAndSmaller: mediaQuery.isLargeTabletAndSmaller,
    isLargeTablet: mediaQuery.isLargeTabletAndSmaller && !mediaQuery.isSmallTabletAndSmaller,
    isDesktop: mediaQuery.isDesktop,
  };
};
