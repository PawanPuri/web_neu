

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WOW from 'wowjs';
import './css/animate.css'; // Import animate.css for animations
// import './scss/_responsive.scss';
// import './scss/_varriable.scss';
// import './scss/_about.scss';

// Initialize WOW.js after imports
new WOW.WOW({
  boxClass: 'wow',      // Class for WOW.js animations
  animateClass: 'animated', // Animation class from animate.css
  offset: 0,            // Distance to start animation
  mobile: true,         // Support animations on mobile
  live: true,           // Check for new elements
}).init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
