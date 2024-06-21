import React, { useEffect, useState } from 'react';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
