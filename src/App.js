import React from 'react';
import LoginForm from './login-form/Login-form';
import BookList from './Book/BookList';

function App() {
  const books = [
    { title: 'Book 1', author: 'Author 1', id: 1 },
    { title: 'Book 2', author: 'Author 2', id: 2 },
  ];

  return (
    <div className="App">
      <h1>Welcome to the Bookstore</h1>
      <LoginForm /> {/* Render the LoginForm component */}
      <h2>Book List</h2>
      <BookList books={books} /> {/* Render the BookList component */}
    </div>
  );
}

export default App;
