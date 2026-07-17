import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

// In dev, CRA's "proxy" field forwards relative /api calls to the local server.
// In production (Vercel), client and server are separate deployments, so point
// axios at the deployed API URL via an env var set in the Vercel project settings.
if (process.env.REACT_APP_API_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
