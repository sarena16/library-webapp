import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ApiProvider from './api/ApiProvider';
import LoginForm from './login-form/Login-form';
import HomePage from './home-page/HomePage';

function App() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
