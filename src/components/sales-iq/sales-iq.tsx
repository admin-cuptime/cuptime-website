'use client';

import { useEffect } from 'react';

const SalesIQ = () => {
  useEffect(() => {
    const initScript = document.createElement('script');
    initScript.type = 'text/javascript';
    initScript.innerHTML =
      "window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}";

    const widgetScript = document.createElement('script');
    widgetScript.id = 'zsiqscript';
    widgetScript.src =
      'https://salesiq.zohopublic.in/widget?wc=siq5dda9d3e6d0bfe5d228a7af86a6a7a32d1dced57dab1cf61c71f65de2cc12725e8336542140ecd7572ead7a4d85b8dd652095cd1d1cf06a11fd09353da8e4f42';
    widgetScript.defer = true;

    document.body.appendChild(initScript);
    document.body.appendChild(widgetScript);

    return () => {
      try { document.body.removeChild(widgetScript); } catch {}
      try { document.body.removeChild(initScript); } catch {}
    };
  }, []);

  return null;
};

export default SalesIQ;


