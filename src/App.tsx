import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ApiProvider from './api/ApiProvider';
import LoginForm from './login-form/Login-form';
import HomePage from './home-page/HomePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import BookList from './book-list/BookList'; // Import BookList component

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ApiProvider>
          <Routes>
            <Route path="/home/*" element={<HomePage />}>
              <Route
                path="1"
                element={
                  <div
                    style={{
                      height: '300px',
                      width: '100%',
                      backgroundColor: 'red',
                    }}
                  />
                }
              />
              <Route
                path="2"
                element={
                  <div
                    style={{
                      height: '300px',
                      width: '100%',
                      backgroundColor: 'blue',
                    }}
                  />
                }
              />
            </Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/book-list" element={<BookList />} /> {/* Add BookList route */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </ApiProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
