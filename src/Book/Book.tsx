import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Book.css';


interface BookProps {
  bookId: number;
  isbn: string;
  title: string;
  author: string;
  publisher: string;
  yearPublished: number;
  available: boolean;
  availableBooks: number;
}

const Book = ({
  bookId,
  title,
  isbn,
  author,
  publisher,
  yearPublished,
  available,
  availableBooks,
}: BookProps) => {
  return (
    <Card className="book">
      <CardMedia
        component="img"
        height="200"
        alt={`Cover of the book titled ${title}`}
        className="book-image"
      />
      <CardContent
        className="book-info"
        sx={{ paddingTop: 1, paddingBottom: '9px' }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '2px',
            color: '#333',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: '10px', color: '#666' }}>
          {author}, {yearPublished}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Book;
