import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Analysis from './components/Analysis';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Analysis />
  </React.StrictMode>
);
