import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { MenuAppBar } from '../menu-app-bar/MenuAppBar';
import { useApi } from '../api/ApiProvider';

function HomePage() {
  const apiClient = useApi();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .getBooks()
      .then((response) => {
        if (response.success) {
          setBooks(response.data);
        } else {
          setError('Failed to fetch books');
        }
      })
      .catch(() => setError('Failed to fetch books'))
      .finally(() => setLoading(false));
  }, [apiClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box sx={{ padding: 2 }}>
        <h2>Book List</h2>
        <List>
          {books.map((book: any, index: number) => (
            <ListItem key={index}>
              <ListItemText primary={book.title} secondary={book.author} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Routes>
        <Route
          path="1"
          element={
            <div
              style={{ height: 300, width: '100%', backgroundColor: 'red' }}
            />
          }
        />
        <Route
          path="2"
          element={
            <div
              style={{ height: 300, width: '100%', backgroundColor: 'blue' }}
            />
          }
        />
      </Routes>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" component={Link} to="1" sx={{ mr: 2 }}>
          Route 1
        </Button>
        <Button variant="contained" component={Link} to="2" sx={{ mr: 2 }}>
          Route 2
        </Button>
      </Box>

      <Outlet />
    </Box>
  );
}

export default HomePage;


