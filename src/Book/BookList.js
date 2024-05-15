import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const BookList = ({ books }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
