'use client';

import { useEffect } from 'react';
import { handleAutoAppRedirect } from '@/utils/helper';

export default function DownloadPage() {
  useEffect(() => {
    handleAutoAppRedirect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cuptime-red mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Redirecting to App Store...
        </h1>
        <p className="text-gray-600">
          You will be redirected to download the Cup Time app shortly.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          If you are not redirected automatically, please{' '}
          <button 
            onClick={handleAutoAppRedirect}
            className="text-cuptborder-cuptime-red underline"
          >
            click here
          </button>
        </p>
      </div>
    </div>
  );
}
