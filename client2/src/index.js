import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// This will render app component inside root div the react provided with.
ReactDom.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>, document.getElementById('root'));