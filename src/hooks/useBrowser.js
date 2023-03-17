import { useMemo } from 'react';

export default function useBrowser() {
  const isBrowser = useMemo(() => typeof window !== 'undefined', []);

  return isBrowser;
}
