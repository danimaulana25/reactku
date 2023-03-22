import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import BlogPost from './container/BlogPost/BlogPost';


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals();