import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Book from '../Book/Book';
import { LibraryClient } from '../api/library-client';

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
    <Box>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      <Box>
        {books.map((book) => (
          <Book
            key={book.bookId}
            bookId={book.bookId}
            isbn={book.isbn}
            title={book.title}
            author={book.author}
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

export default BookPage;
