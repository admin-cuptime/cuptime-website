'use client';

export const handlePlaystoreRedirect = () => {
  const userAgent =
    typeof navigator !== 'undefined'
      ? navigator.userAgent || navigator.vendor
      : '';

  console.log('User Agent:', userAgent);

  if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
    // Android, Windows, Linux
    window.open(
      'https://play.google.com/store/apps/details?id=com.cuptime.customer',
      '_blank'
    );
  } else {
    // iOS or Mac
    window.open(
      'https://apps.apple.com/in/app/cup-time/id1645852379',
      '_blank'
    );
  }
};
