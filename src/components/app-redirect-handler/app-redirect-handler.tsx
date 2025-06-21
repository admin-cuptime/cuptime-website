'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { handleAutoAppRedirect } from '@/utils/helper';

export default function AppRedirectHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const shouldRedirect = 
      searchParams.get('download') === 'app' ||
      searchParams.get('app') === 'true' ||
      searchParams.get('redirect') === 'app' ||
      searchParams.get('openapp') === 'true';

    if (shouldRedirect) {
      const timer = setTimeout(() => {
        handleAutoAppRedirect();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
} 