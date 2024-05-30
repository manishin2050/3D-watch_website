// import React from 'react'
// import App from './App.jsx'



import './index.css'
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './app/store.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );