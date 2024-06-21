// BookList.tsx
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Book from '../Book/Book';
import './BookList.css'; // Import your BookList.css for styling
import { LibraryClient } from '../api/library-client';

const BookList = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const client = new LibraryClient();
      const response = await client.getBooks();

      if (response.success) {
        setBooks(response.data);
      } else {
        setError(`Error: ${response.statusCode}`);
      }
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <p>{error}</p>;

  return (
    <Box className="book-list-container">
      <Typography variant="h4" className="book-list-header" align="center" gutterBottom>
        Book List
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {books.map((book) => (
          <Book
            key={book.bookId}
            bookId={book.bookId}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            publisher={book.publisher}
            yearPublished={book.yearPublished}
            available={book.available}
            availableBooks={book.availableBooks}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BookList;
