import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import DownloadApp from './components/Section/DownloadApp/DownloadApp';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
