// src/main.ts

declare global {
    interface Window {
      _paq: any[];
    }
  }
  
  // 初始化 Matomo 跟踪代码
  window._paq = window._paq || [];
  window._paq.push(['trackPageView']);
  window._paq.push(['enableLinkTracking']);
  
  (function() {
      const u = "https://matomo.17ai.net/";
      window._paq.push(['setTrackerUrl', u + 'matomo.php']);
      window._paq.push(['setSiteId', '8']);
      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = u + 'matomo.js';
      s.parentNode?.insertBefore(g, s);
  })();
  
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

