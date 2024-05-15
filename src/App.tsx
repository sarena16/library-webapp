import React from 'react';
import logo from './logo.svg';
import LoginForm from './login-form/Login-form';
import HomePage from './home-page/HomePage';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Height } from '@mui/icons-material';
import { bgcolor } from '@mui/system';
import { Box } from '@mui/material';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="LoginForm" />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="settings"
        element={<Box sx={{ Height: 300, width: '100%', bgcolor: 'red' }} />}
      />
      <Route
        path="books"
        element={<Box sx={{ Height: 300, width: '100%', bgcolor: 'blue' }} />}
      />

      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
