import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Book from '../Book/Book';
import { LibraryClient } from '../api/library-client';
import './BookPage.css'; 

const BookPage = () => {
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

  if (error) return <p>Error: {error}</p>;

  return (
    <Box className="book-page-container">
      <Typography variant="h4" className="book-list-header">
        Book List
      </Typography>
      <Box className="book-list">
        {books.map((book) => (
          <Box key={book.bookId} className="book-item">
            <Book
              bookId={book.bookId}
              isbn={book.isbn}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              yearPublished={book.yearPublished}
              available={book.available}
              availableBooks={book.availableBooks}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BookPage;
