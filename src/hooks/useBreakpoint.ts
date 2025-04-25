// useBreakpoint.ts - AI generated
import { useEffect, useState } from "react";

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};


type BreakpointFlags = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const useBreakpoint = (): BreakpointFlags => {
  const [flags, setFlags] = useState<BreakpointFlags>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setFlags({
        isMobile: width < breakpoints.tablet,
        isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
        isDesktop: width >= breakpoints.desktop,
      });
    };

    handleResize(); // Run on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return flags;
};
