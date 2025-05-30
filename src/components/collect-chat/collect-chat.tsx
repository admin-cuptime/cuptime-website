'use client';

import { useEffect } from 'react';

const CollectChat = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #chat-bot-launcher-container {
        bottom: 100px !important; 
      }
      #chat-bot-message-container {
          bottom: 150px !important;
        }
    `;
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.innerHTML = `
      (function(w, d) {
        w.CollectId = "60e43d460ac71735ab58e064";
        var h = d.head || d.getElementsByTagName("head")[0];
        var s = d.createElement("script");
        s.setAttribute("type", "text/javascript");
        s.async=true;
        s.setAttribute("src", "https://collectcdn.com/launcher.js");
        h.appendChild(s);
      })(window, document);
    `;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CollectChat;