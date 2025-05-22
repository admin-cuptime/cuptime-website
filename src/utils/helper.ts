export const handleAppRedirect = () => {
  const userAgent =
    typeof navigator !== 'undefined'
      ? navigator.userAgent || navigator.vendor
      : '';

  if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
    // iOS or Mac
    window.open(
      'https://apps.apple.com/in/app/cup-time/id1645852379',
      '_blank'
    );
  } else {
    // Android, Windows, Linux, others
    window.open(
      'https://play.google.com/store/apps/details?id=com.cuptime.customer',
      '_blank'
    );
  }
};

export const handlePlaystoreRedirect = () => {
  window.open(
    'https://play.google.com/store/apps/details?id=com.cuptime.customer',
    '_blank'
  );
};

export const handleAppstoreRedirect = () => {
  window.open('https://apps.apple.com/in/app/cup-time/id1645852379', '_blank');
};
